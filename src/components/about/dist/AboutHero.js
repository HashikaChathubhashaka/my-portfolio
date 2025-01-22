"use strict";
exports.__esModule = true;
exports.AboutHero = void 0;
var react_1 = require("react");
require("./profile.scss");
var pp_jpg_1 = require("./pp.jpg");
require("./aboutMain.css");
require("./profile.css");
function AboutHero() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
            react_1["default"].createElement("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-1 lg:gap-1" },
                react_1["default"].createElement("div", { className: "flex items-center justify-center" }),
                react_1["default"].createElement("div", { className: "custom-style" },
                    react_1["default"].createElement("h1", { className: "custom-heading black" }, "Less Consume...! More Creative...! ")),
                react_1["default"].createElement("div", { className: "flex items-center justify-center" },
                    react_1["default"].createElement("div", { className: "avatar" },
                        react_1["default"].createElement("img", { src: pp_jpg_1["default"], alt: "Profile" }))),
                react_1["default"].createElement("div", { className: "flex flex-col justify-center" },
                    react_1["default"].createElement("p", { className: "mt-10 text-xl justify-center text-center" },
                        "Final-year Electronic and Telecommunication Engineering student passionate about ",
                        react_1["default"].createElement("strong", null, " innovation,"),
                        " ",
                        react_1["default"].createElement("strong", null, "learning"),
                        ", and",
                        react_1["default"].createElement("strong", null, " creating "),
                        "impactful tech solutions.\uD83D\uDE80"))))));
}
exports.AboutHero = AboutHero;
