var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var CARS = [{
    id: 1,
    brand: "Audi",
    models: [{
        id: 1,
        name: "A1",
        collection: [{
            id: 1,
            version: "Sportback",
            year: 2019,
            horsepower: 95,
            engine: 999
        }, {
            id: 2,
            version: "Citycarver",
            year: 2019,
            horsepower: 95,
            engine: 999
        }]
    }, {
        id: 2,
        name: "Q5",
        collection: [{
            id: 1,
            version: "FY 2021",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }, {
            id: 2,
            version: "Sportback",
            year: 2021,
            horsepower: 299,
            engine: 1984
        }]
    }, {
        id: 3,
        name: "TT",
        collection: [{
            id: 1,
            version: "Coupe",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }, {
            id: 2,
            version: "Roadster",
            year: 2021,
            horsepower: 197,
            engine: 1984
        }]
    }]
}, {
    id: 2,
    brand: "BMW",
    models: [{
        id: 1,
        name: "8 series",
        collection: [{
            id: 1,
            version: "G1X LCI",
            year: 2022,
            horsepower: 333,
            engine: 2998
        }, {
            id: 2,
            version: "G1X",
            year: 2019,
            horsepower: 340,
            engine: 2998
        }]
    }, {
        id: 2,
        name: "X6",
        collection: [{
            id: 1,
            version: "G06 LCI",
            year: 2023,
            horsepower: 530,
            engine: 4395
        }, {
            id: 2,
            version: "G06",
            year: 2020,
            horsepower: 286,
            engine: 2993
        }]
    }]
}];

var Heading = function Heading(_ref) {
    var text = _ref.text;

    return text.length ? React.createElement(
        "h1",
        null,
        text
    ) : null;
};

var CarTable = function CarTable(_ref2) {
    var carsList = _ref2.carsList;

    return React.createElement(
        "table",
        null,
        React.createElement(
            "tbody",
            null,
            carsList.map(function (car, carIndex) {
                return React.createElement(
                    React.Fragment,
                    { key: carIndex },
                    React.createElement(
                        "tr",
                        { className: "row__brand" },
                        React.createElement(
                            "td",
                            { colSpan: carsList.length },
                            car.brand
                        )
                    ),
                    car.models.map(function (carModel, carModelIndex) {
                        return React.createElement(
                            React.Fragment,
                            { key: carModelIndex },
                            carModel.collection.map(function (carModelCollection, carModelCollectionIndex) {
                                return React.createElement(
                                    "tr",
                                    { key: carModelCollectionIndex },
                                    carModelCollectionIndex === 0 && React.createElement(
                                        "td",
                                        { rowSpan: carModel.collection.length, className: "cell__model" },
                                        carModel.name
                                    ),
                                    React.createElement(
                                        "td",
                                        null,
                                        React.createElement(
                                            "ul",
                                            null,
                                            Object.keys(carModelCollection).map(function (carModelCollectionItem, carModelCollectionIndex) {
                                                return carModelCollectionItem !== "id" ? React.createElement(
                                                    "li",
                                                    { key: carModelCollectionIndex },
                                                    carModelCollectionItem,
                                                    ": ",
                                                    carModelCollection[carModelCollectionItem]
                                                ) : null;
                                            })
                                        )
                                    )
                                );
                            })
                        );
                    })
                );
            })
        )
    );
};

root.render(React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading, { text: "Car Specs" }),
    React.createElement(CarTable, { carsList: CARS })
));