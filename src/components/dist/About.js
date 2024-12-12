"use strict";
exports.__esModule = true;
exports.About = void 0;
var react_1 = require("react");
var TechStack_1 = require("./about/TechStack");
var Experience_1 = require("./about/Experience");
function About() {
    return (react_1["default"].createElement("div", { className: "bg-gray-50 py-24" },
        react_1["default"].createElement("div", { className: "mx-auto max-w-[1920px] px-6 sm:px-8 lg:px-12" },
            react_1["default"].createElement("div", { className: "text-center" },
                react_1["default"].createElement("h1", { className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" }, "#WHO AM I ?")),
            react_1["default"].createElement("div", { className: "mt-16 grid gap-8 lg:grid-cols-12" },
                react_1["default"].createElement("div", { className: "lg:col-span-7" },
                    react_1["default"].createElement(Experience_1.Experience, null)),
                react_1["default"].createElement("div", { className: "lg:col-span-5" },
                    react_1["default"].createElement(TechStack_1.TechStack, null))))));
}
exports.About = About;
exports["default"] = About;
