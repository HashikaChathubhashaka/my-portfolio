"use strict";
exports.__esModule = true;
exports.ProjectsGrid = void 0;
var react_1 = require("react");
var ProjectCard_1 = require("./ProjectCard");
var projects_1 = require("../../data/projects");
function ProjectsGrid() {
    var _a = react_1.useState('all'), filter = _a[0], setFilter = _a[1];
    var filteredProjects = filter === 'all'
        ? projects_1.projects
        : projects_1.projects.filter(function (p) { return p.featured; });
    return (react_1["default"].createElement("div", { className: "mx-auto max-w-7xl px-6 py-16 sm:px-6 lg:px-8" },
        react_1["default"].createElement("div", { className: "flex flex-col items-center" },
            react_1["default"].createElement("h2", { className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mt-12" }, "#PROJECTS"),
            react_1["default"].createElement("div", { className: "mt-8 flex gap-4" },
                react_1["default"].createElement("button", { onClick: function () { return setFilter('all'); }, className: "rounded-full px-6 py-2 text-sm font-medium transition-colors " + (filter === 'all'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200') }, "All Projects"),
                react_1["default"].createElement("button", { onClick: function () { return setFilter('featured'); }, className: "rounded-full px-6 py-2 text-sm font-medium transition-colors " + (filter === 'featured'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200') }, "Featured"))),
        react_1["default"].createElement("div", { className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" }, filteredProjects.map(function (project) { return (react_1["default"].createElement(ProjectCard_1.ProjectCard, { key: project.id, project: project })); }))));
}
exports.ProjectsGrid = ProjectsGrid;
