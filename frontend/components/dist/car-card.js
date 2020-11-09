"use strict";
exports.__esModule = true;
exports.CarCard = void 0;
var car_card_module_css_1 = require("../styles/modules/car-card.module.css");
exports.CarCard = function (props) {
    // Note: temporary image is used in card. In the future could be used to show an image of the car
    return (React.createElement("div", { className: car_card_module_css_1["default"].card + " card is-flex is-flex-direction-row m-3" },
        React.createElement("div", { className: car_card_module_css_1["default"].cardImage + " card-image" },
            React.createElement("img", { className: "" + car_card_module_css_1["default"].img, src: "https://bulma.io/images/placeholders/1280x960.png", alt: "Placeholder image" })),
        React.createElement("div", { className: "card-content" },
            React.createElement("div", { className: car_card_module_css_1["default"].cardContent + " content is-flex is-flex-direction-column is-flex-wrap-wrap" },
                React.createElement("h1", { id: "year-make", className: "has-text-primary" },
                    props.car.year,
                    " ",
                    props.car.make),
                React.createElement("h5", { id: "color" },
                    "Color: ",
                    React.createElement("strong", null, props.car.color),
                    " "),
                React.createElement("h5", { id: "roof" },
                    "Includes Sun Roof: ",
                    React.createElement("strong", null, props.car.hasSunroof ? "Yes" : "No")),
                React.createElement("h5", { id: "drive" },
                    "Is Four Wheel Drive:",
                    React.createElement("strong", null, props.car.isFourWheelDrive ? "Yes" : "No")),
                React.createElement("h5", { id: "mileage" },
                    "Has Low Mileage: ",
                    React.createElement("strong", null, props.car.hasLowMiles ? "Yes" : "No")),
                React.createElement("h5", { id: "window" },
                    "Window Type: ",
                    React.createElement("strong", null, props.car.hasPowerWindows ? "Power" : "Manual")),
                React.createElement("h5", { id: "navigation" },
                    "Includes Navigation: ",
                    React.createElement("strong", null, props.car.hasNavigation ? "Yes" : "No")),
                React.createElement("h5", { id: "seat" },
                    "Seat Type: ",
                    React.createElement("strong", null, props.car.hasHeatedSeats ? "Heated" : "Standard")),
                React.createElement("h5", { id: "price" },
                    "Price: ",
                    React.createElement("strong", null, '$' + props.car.price)),
                React.createElement("br", null)))));
};
