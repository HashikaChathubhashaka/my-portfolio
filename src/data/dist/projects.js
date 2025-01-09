"use strict";
exports.__esModule = true;
exports.projects = void 0;
var level_jpg_1 = require("./images/level.jpg"); // Adjust path as needed
var aruco_navigation_jpeg_1 = require("./images/aruco navigation.jpeg"); // Adjust path as needed
var dual_robot_jpeg_1 = require("./images/dual robot.jpeg"); // Adjust path as needed
var MCQ_site_jpg_1 = require("./images/MCQ site.jpg"); // Adjust path as needed
exports.projects = [
    {
        id: '1',
        title: 'Digital Spirit Level',
        description: ' digital Spirit Level capable of measuring angles in relation to vertical and horizontal axes.',
        imageUrl: level_jpg_1["default"],
        tags: ['Solidworks', 'Altium', 'C++'],
        liveUrl: 'https://github.com/HashikaChathubhashaka/Digital-Sprit-Level/blob/main/video.mp4',
        githubUrl: 'https://github.com/HashikaChathubhashaka/Digital-Sprit-Level',
        featured: true
    },
    {
        id: '2',
        title: 'Aruco Navigation Robot',
        description: ' Aruco Navigatioon robot made for competition',
        imageUrl: aruco_navigation_jpeg_1["default"],
        tags: ['ROS2', 'Raspberry Pi', 'Solidworks'],
        liveUrl: '',
        githubUrl: 'https://github.com/HashikaChathubhashaka/Autonoumous-Aruco-Navigation-Competition-ROS2/tree/main',
        featured: true
    },
    {
        id: '3',
        title: 'Autonomus Dual Robots',
        description: ' Aruco Navigatioon robot made for competition',
        imageUrl: dual_robot_jpeg_1["default"],
        tags: ['C++', 'Solidworks'],
        liveUrl: '',
        githubUrl: 'https://github.com/HashikaChathubhashaka/Autonoumous-Aruco-Navigation-Competition-ROS2/tree/main',
        featured: true
    },
    {
        id: '4',
        title: 'MCQ website',
        description: 'MCQ webstie made for Game competition',
        imageUrl: MCQ_site_jpg_1["default"],
        tags: ['ReactJS', 'Rest-API', 'CSS'],
        liveUrl: '',
        githubUrl: 'https://github.com/HashikaChathubhashaka/MCQ-website-reactJS',
        featured: true
    },
    {
        id: '5',
        title: 'Gaming competition',
        description: ' Aruco Navigatioon robot made for competition',
        imageUrl: aruco_navigation_jpeg_1["default"],
        tags: ['Unity', 'C#'],
        liveUrl: '',
        githubUrl: 'https://github.com/HashikaChathubhashaka/Autonoumous-Aruco-Navigation-Competition-ROS2/tree/main',
        featured: true
    },
    {
        id: '6',
        title: 'Fast Line follower',
        description: ' Aruco Navigatioon robot made for competition',
        imageUrl: aruco_navigation_jpeg_1["default"],
        tags: ['ESP32', 'C++'],
        liveUrl: '',
        githubUrl: 'https://github.com/HashikaChathubhashaka/Line-Rider',
        featured: true
    },
];
