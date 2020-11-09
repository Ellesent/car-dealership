import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { CarCard } from "../components/car-card";
import { Car } from "../components/filter-section";

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

it("renders car data correctly with given props", () => {
    const fakeCar: Car = {
        _id: "59d2698c05889e0b23959106",
        make: "Toyota",
        year: 2012,
        color: "Silver",
        price: 18696,
        hasSunroof: true,
        isFourWheelDrive: true,
        hasLowMiles: false,
        hasPowerWindows: true,
        hasNavigation: false,
        hasHeatedSeats: false
    };

    act(() => {
        render(<CarCard car={fakeCar} />, container);
    });

    const cardContent = container?.querySelector(".content");

    expect(cardContent);

    expect(cardContent?.querySelector("#year-make")?.textContent).toBe(`${fakeCar.year} ${fakeCar.make}`);
    expect(helperMethod(cardContent, "color", "strong")).toBe(`${fakeCar.color}`);
    expect(helperMethod(cardContent, "roof", "strong")).toBe(`Yes`);
    expect(helperMethod(cardContent, "drive", "strong")).toBe(`Yes`);
    expect(helperMethod(cardContent, "mileage", "strong")).toBe(`No`);
    expect(helperMethod(cardContent, "window", "strong")).toBe(`Power`);
    expect(helperMethod(cardContent, "navigation", "strong")).toBe(`No`);
    expect(helperMethod(cardContent, "seat", "strong")).toBe('Standard');
    expect(helperMethod(cardContent, "price", "strong")).toBe(`$${fakeCar.price}`);


});


const helperMethod = (cardContent: Element | null | undefined, id : string, element : string) => {
    return cardContent?.querySelector(`#${id}`)?.getElementsByTagName(element)[0].textContent
}