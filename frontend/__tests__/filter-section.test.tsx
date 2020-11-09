import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { FilterSection } from "../components/filter-section";

let container: Element | null = null;


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

it("Verify filter section renders correctly with given props", () => {
    const mockDispatcher = jest.fn();
    act(() => {
        render(<FilterSection setCarList={mockDispatcher} />, container);

        // Once mockDispatcher has been run at least once we should expec it to be truthy
        expect(mockDispatcher).toBeCalledTimes(0);
    });
});