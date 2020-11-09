"use strict";
exports.__esModule = true;
exports.Results = void 0;
var car_card_1 = require("./car-card");
// Component for the section of the page that will show car results based on search criteria
exports.Results = function (props) {
    return (React.createElement("section", { key: "card-section-0", className: "is-flex is-flex-direction-column m-3" },
        React.createElement("div", { className: "container" },
            React.createElement("h1", { className: "title" }, "Search Results"),
            React.createElement("section", { key: "card-section-1", className: "car-card-section is-flex is-flex-direction-column" }, props.carList.map(function (car) { return (React.createElement(car_card_1.CarCard, { key: car._id, car: car })); })))));
};
