"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ContactForm = void 0;
var react_1 = require("react");
var browser_1 = require("@emailjs/browser");
var react_hot_toast_1 = require("react-hot-toast");
var lucide_react_1 = require("lucide-react");
function ContactForm() {
    var _this = this;
    var _a = react_1.useState(false), isSubmitting = _a[0], setIsSubmitting = _a[1];
    var _b = react_1.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    }), formData = _b[0], setFormData = _b[1];
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, browser_1["default"].send('service_yo0x8rm', // Replace with your EmailJS service ID
                        'template_9jwa2s2', // Replace with your EmailJS template ID
                        formData, 'o2TmHGg7KUB5IE5KH' // Replace with your EmailJS public key
                        )];
                case 2:
                    _a.sent();
                    react_hot_toast_1["default"].success('Message sent successfully!');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    react_hot_toast_1["default"].error('Failed to send message. Please try again.');
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "rounded-2xl bg-white p-8 shadow-lg" },
        react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700" }, "Name"),
                react_1["default"].createElement("input", { type: "text", id: "name", required: true, className: "mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500", value: formData.name, onChange: function (e) { return setFormData(__assign(__assign({}, formData), { name: e.target.value })); } })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700" }, "Email"),
                react_1["default"].createElement("input", { type: "email", id: "email", required: true, className: "mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500", value: formData.email, onChange: function (e) { return setFormData(__assign(__assign({}, formData), { email: e.target.value })); } })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("label", { htmlFor: "subject", className: "block text-sm font-medium text-gray-700" }, "Subject"),
                react_1["default"].createElement("input", { type: "text", id: "subject", required: true, className: "mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500", value: formData.subject, onChange: function (e) { return setFormData(__assign(__assign({}, formData), { subject: e.target.value })); } })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700" }, "Message"),
                react_1["default"].createElement("textarea", { id: "message", required: true, rows: 4, className: "mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500", value: formData.message, onChange: function (e) { return setFormData(__assign(__assign({}, formData), { message: e.target.value })); } })),
            react_1["default"].createElement("button", { type: "submit", disabled: isSubmitting, className: "inline-flex w-full items-center justify-center rounded-md bg-gray-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50" }, isSubmitting ? ('Sending...') : (react_1["default"].createElement(react_1["default"].Fragment, null,
                "Send Message",
                react_1["default"].createElement(lucide_react_1.Send, { className: "ml-2 h-5 w-5" }))))),
        react_1["default"].createElement(react_hot_toast_1.Toaster, { position: "bottom-right" })));
}
exports.ContactForm = ContactForm;
