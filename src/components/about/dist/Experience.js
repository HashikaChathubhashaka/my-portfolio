"use strict";
exports.__esModule = true;
exports.Experience = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var experiences = [
    {
        company: 'Arimac Lanka (Private) Limited.',
        position: 'Intern Robotics Engineer',
        period: 'Nov 2023 - May 2024',
        description: 'Developed indoor navigation robot using ROS2.',
        achievements: [
            'Creating a simulation for an indoor navigation robot with LiDAR, IMU, and depth camera using Gazebo.',
            'Developing a differential-drive physical robot that can navigate in indoor maps using the simulation implementation as a reference.',
            'Creating a simulation for a robot to follow a human in an indoor map using Gazebo.'
        ]
    }
];
function Experience() {
    return (react_1["default"].createElement("div", { className: "space-y-8" },
        react_1["default"].createElement("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 text-center " }, "Professional Experience"),
        react_1["default"].createElement("div", { className: "space-y-8" }, experiences.map(function (exp, index) { return (react_1["default"].createElement("div", { key: index, className: "relative rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl" },
            react_1["default"].createElement("div", { className: "flex items-center space-x-4" },
                react_1["default"].createElement("div", { className: "rounded-lg bg-indigo-600 p-3 text-white" },
                    react_1["default"].createElement(lucide_react_1.Briefcase, { className: "h-6 w-6" })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", { className: "text-xl font-bold text-gray-900" }, exp.position),
                    react_1["default"].createElement("p", { className: "text-indigo-600" }, exp.company),
                    react_1["default"].createElement("p", { className: "text-sm text-gray-500" }, exp.period))),
            react_1["default"].createElement("p", { className: "mt-4 text-gray-600" }, exp.description),
            react_1["default"].createElement("ul", { className: "mt-4 space-y-2" }, exp.achievements.map(function (achievement, i) { return (react_1["default"].createElement("li", { key: i, className: "flex items-center space-x-2" },
                react_1["default"].createElement("span", { className: "h-1.5 w-1.5 rounded-full bg-indigo-600" }),
                react_1["default"].createElement("span", { className: "text-gray-600" }, achievement))); })))); }))));
}
exports.Experience = Experience;
