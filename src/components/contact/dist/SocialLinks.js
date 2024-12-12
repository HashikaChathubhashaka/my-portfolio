"use strict";
exports.__esModule = true;
exports.SocialLinks = void 0;
var react_1 = require("react");
// import { Github, Linkedin } from 'lucide-react';
var fa_1 = require("react-icons/fa");
function SocialLinks() {
    return (react_1["default"].createElement("div", { className: "space-y-6" },
        react_1["default"].createElement("h2", { className: "text-2xl font-bold text-gray-900 text-center " }, "Follow Me"),
        react_1["default"].createElement("div", { className: " space-x-4 flex justify-center" },
            react_1["default"].createElement("a", { href: "https://linkedin.com/in/hashika-chathubhashaka", target: "_blank", rel: "noopener noreferrer", className: "rounded-full bg-blue-600 p-3 text-white transition-colors hover:bg-blue-700" },
                react_1["default"].createElement(fa_1.FaLinkedin, { className: "h-6 w-6" })),
            react_1["default"].createElement("a", { href: "https://github.com/HashikaChathubhashaka", target: "_blank", rel: "noopener noreferrer", className: "rounded-full bg-gray-900 p-3 text-white transition-colors hover:bg-gray-700" },
                react_1["default"].createElement(fa_1.FaGithub, { className: "h-6 w-6" })),
            react_1["default"].createElement("a", { href: "https://discord.com/users/hashika-chathubhashaka", target: "_blank", rel: "noopener noreferrer", className: "rounded-full bg-[#7289da] p-3 text-white transition-colors hover:bg-[#5a6f9e]" },
                react_1["default"].createElement(fa_1.FaDiscord, { className: "h-6 w-6" })))));
}
exports.SocialLinks = SocialLinks;
