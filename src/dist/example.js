"use strict";
exports.__esModule = true;
var react_1 = require("react");
// Functional Component with TypeScript
var App = function (_a) {
    var name = _a.name, age = _a.age;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null,
            "Hello, ",
            name,
            "!"),
        age && react_1["default"].createElement("p", null,
            "You are ",
            age,
            " years old.")));
};
exports["default"] = App;
