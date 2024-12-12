"use strict";
exports.__esModule = true;
exports.Contact = void 0;
var react_1 = require("react");
var ContactForm_1 = require("../components/contact/ContactForm");
var SocialLinks_1 = require("../components/contact/SocialLinks");
var ContactInfo_1 = require("../components/contact/ContactInfo");
function Contact() {
    return (react_1["default"].createElement("div", { className: " bg-gray-50 py-24" },
        react_1["default"].createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
            react_1["default"].createElement("div", { className: "text-center" },
                react_1["default"].createElement("h1", { className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" }, "#LETS CONNECT"),
                react_1["default"].createElement("p", { className: "mt-4 text-lg text-gray-600" })),
            react_1["default"].createElement("div", { className: "mt-16 grid gap-10 lg:grid-cols-2" },
                react_1["default"].createElement("div", { className: "space-y-12" },
                    react_1["default"].createElement(ContactInfo_1.ContactInfo, null),
                    react_1["default"].createElement(SocialLinks_1.SocialLinks, null)),
                react_1["default"].createElement(ContactForm_1.ContactForm, null)))));
}
exports.Contact = Contact;
exports["default"] = Contact;
