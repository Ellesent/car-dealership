import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Car } from "../components/filter-section";
import { Results } from "../components/results";

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
    const fakeCar0: Car = {
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
        hasHeatedSeats: true
    };

    const fakeCar1: Car = {
        _id: "59d2698c05889e0b23945039",
        make: "Ford",
        year: 2011,
        color: "Black",
        price: 12345,
        hasSunroof: false,
        isFourWheelDrive: false,
        hasLowMiles: true,
        hasPowerWindows: true,
        hasNavigation: false,
        hasHeatedSeats: false
    };

    const fakeCarList = [fakeCar0, fakeCar1];



    act(() => {
        render(<Results carList={fakeCarList} />, container);
    });

    const carElements = container?.querySelector(".car-card-section");
    expect(carElements?.querySelectorAll(".card")).toHaveLength(fakeCarList.length);
})

// it("renders car data", async () => {
//     const fakeCar : Car = {
//         _id: "59d2698c05889e0b23959106",
//         make: "Toyota",
//         year: 2012,
//         color: "Silver",
//         price: 18696,
//         hasSunroof: true,
//         isFourWheelDrive: true,
//         hasLowMiles: false,
//         hasPowerWindows: true,
//         hasNavigation: false,
//         hasHeatedSeats: true
//     };

//     const mockFetchPromise = Promise.resolve({
//         json: () => Promise.resolve(fakeCar),
//     } as Response);

//     jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

//     // Use the asynchronous version of act to apply resolved promises
//     await act(async () => {
//       render(<User id="123" />, container);
//     });

//     expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
//     expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
//     expect(container.textContent).toContain(fakeUser.address);

//     // remove the mock to ensure tests are completely isolated
//     global.fetch.mockRestore();
//   });