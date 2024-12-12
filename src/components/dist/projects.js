"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ProjectsGrid_1 = require("./project/ProjectsGrid");
require("./tail.css");
function App() {
    return (react_1["default"].createElement("div", { className: " bg-gray-50" },
        react_1["default"].createElement(ProjectsGrid_1.ProjectsGrid, null)));
}
exports["default"] = App;
