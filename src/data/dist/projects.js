"use strict";
exports.__esModule = true;
exports.projects = void 0;
var level_jpg_1 = require("./images/level.jpg"); // Adjust path as needed
var aruco_navigation_jpeg_1 = require("./images/aruco navigation.jpeg"); // Adjust path as needed
var dual_robot_jpeg_1 = require("./images/dual robot.jpeg"); // Adjust path as needed
var MCQ_site_jpg_1 = require("./images/MCQ site.jpg"); // Adjust path as needed
var GameProject_png_1 = require("./images/GameProject.png"); // Adjust path as needed
var flowerExchanger_jpg_1 = require("./images/flowerExchanger.jpg"); // Adjust path as needed
var arm_jpg_1 = require("./images/arm.jpg"); // Adjust path as needed
var BrainTumor_jpg_1 = require("./images/BrainTumor.jpg");
var portfolio_png_1 = require("./images/portfolio.png");
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
        liveUrl: 'https://drive.google.com/file/d/1RHK2uEHMHc_EzkDPTjifEKl-1gp5lR_E/view?usp=drive_link',
        githubUrl: 'https://github.com/HashikaChathubhashaka/Dual-Robot-Systerm-Exmo-exhibition',
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
        title: 'WATT with VAT-WebGL Game',
        description: ' Continous Running Game made for Game competition',
        imageUrl: GameProject_png_1["default"],
        tags: ['Unity', 'C#'],
        liveUrl: 'https://github.com/HashikaChathubhashaka/FrosbiTe-Games/tree/phase4/Phase_3',
        githubUrl: 'https://github.com/HashikaChathubhashaka/FrosbiTe-Games/tree/phase4',
        featured: true
    },
    {
        id: '6',
        title: 'Flower Exchanger',
        description: ' Made for LESG company project',
        imageUrl: flowerExchanger_jpg_1["default"],
        tags: ['C++'],
        liveUrl: '',
        githubUrl: 'https://github.com/HashikaChathubhashaka/Flower-Exchange',
        featured: true
    },
    {
        id: '7',
        title: '3-DOF Robot Arm',
        description: 'Robotic Arm made for University Project',
        imageUrl: arm_jpg_1["default"],
        tags: ['C++'],
        liveUrl: '',
        githubUrl: 'https://github.com/HashikaChathubhashaka/Robotic-Arm-Arduino',
        featured: false
    },
    {
        id: '8',
        title: 'Brain Tumor Segmentation',
        description: 'Machine Learning project made as University Project',
        imageUrl: BrainTumor_jpg_1["default"],
        tags: ['Python', 'Tensorflow'],
        liveUrl: '',
        githubUrl: 'https://github.com/HashikaChathubhashaka/Brain-Tumor-Segmentation',
        featured: false
    },
    {
        id: '9',
        title: 'My Portfolio Site',
        description: 'This is the site you are currently viewing. Built with React and TypeScript.',
        imageUrl: portfolio_png_1["default"],
        tags: ['ReactJS', 'TypeScript', 'CSS'],
        liveUrl: '',
        githubUrl: 'https://github.com/HashikaChathubhashaka/my-portfolio',
        featured: false
    },
];
