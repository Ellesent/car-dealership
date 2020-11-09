import {render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "../pages";

let container : Element | null = null;

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

// it("index renders correctly", () => {
//     act(() => {
//       render(<Home />, container);
//     });
//     expect(container.textContent).toBe("Hey, stranger");