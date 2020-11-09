import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { NavBar } from "../components/navbar";

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

it("navbar can render", () => { 
    act(() => {
        render(<NavBar/>, container);
    }); 
});