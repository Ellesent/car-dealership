import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Car, FilterSection } from "../components/filter-section";

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
    jest.clearAllMocks();
});

it("Verify filter section renders correctly with given props", async () => {
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

    // mocking fetch to avoid warnings of unresolved promises and to test dispatcher being called
    const mockFetchPromise = Promise.resolve({
        json: () => Promise.resolve(fakeCar),
    } as Response);

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const mockDispatcher = jest.fn();

    expect(mockDispatcher).toBeCalledTimes(0);

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
        render(<FilterSection setCarList={mockDispatcher} />, container);
    });

    // expect the dispatcher to be called in useEffect once on render
    expect(mockDispatcher).toBeCalledTimes(1);

});
