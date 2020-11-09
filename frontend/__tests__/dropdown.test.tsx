import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Dropdown } from "../components/dropdown";
import Home from "../pages";

let container: Element | null = null;

let testObject = {
    "test1": "test1",
    "test2": "test2",
    "test3": 3
}

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    if (container != null) {
        unmountComponentAtNode(container);
        container.remove();
    }
    container = null;
});

it("Verify dropdown renders correctly with given props", () => {
    const mockDispatcher = jest.fn();
    act(() => {
        render(<Dropdown dropDownObjectList={testObject} stateDispatcher={mockDispatcher} />, container);

        // Once mockDispatcher has been run at least once we should expec it to be truthy
        expect(mockDispatcher).toBeCalledTimes(0);
    });

    const dropDownHTMLElements = container?.querySelectorAll(".dropdown-item");


    // verify # of dropdown-items match the number of keys in the passed in object
    expect(dropDownHTMLElements).toHaveLength(Object.keys(testObject).length);

    // verify drop down items' text matches object keys
    dropDownHTMLElements?.forEach((e) => {
        expect(e.innerHTML in testObject).toBeTruthy();
    });

    // click a dropdown item
    const dropDownTest = dropDownHTMLElements?.item(1);

    // ensure item is not active yet
    expect(!dropDownTest?.classList.contains("is-active"));

    act(() => {
        dropDownTest?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });

      expect(mockDispatcher).toBeCalledTimes(1);
      expect(dropDownTest?.classList.contains("is-active"));
});

