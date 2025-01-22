import { Project } from '../types/project';
import levelImage from './images/level.jpg'; // Adjust path as needed
import ArucoImage from './images/aruco navigation.jpeg'; // Adjust path as needed
import DualRobot from './images/dual robot.jpeg'; // Adjust path as needed
import MCQ from './images/MCQ site.jpg'; // Adjust path as needed
import GameImage from './images/GameProject.png'; // Adjust path as needed
import FlowerImage from './images/flowerExchanger.jpg'; // Adjust path as needed
import ArmImage from './images/arm.jpg'; // Adjust path as needed
import BrainImage from './images/BrainTumor.jpg';
import portfolioImage from './images/portfolio.png'; 

export const projects: Project[] = [
  {
    id: '1',
    title: 'Digital Spirit Level',
    description: ' digital Spirit Level capable of measuring angles in relation to vertical and horizontal axes.',
    imageUrl: levelImage,
    tags: ['Solidworks', 'Altium', 'C++'],
    liveUrl: 'https://github.com/HashikaChathubhashaka/Digital-Sprit-Level/blob/main/video.mp4',
    githubUrl: 'https://github.com/HashikaChathubhashaka/Digital-Sprit-Level',
    featured: true
  },

  {
    id: '2',
    title: 'Aruco Navigation Robot',
    description: ' Aruco Navigatioon robot made for competition',
    imageUrl: ArucoImage,
    tags: ['ROS2', 'Raspberry Pi', 'Solidworks'],
    liveUrl: '',
    githubUrl: 'https://github.com/HashikaChathubhashaka/Autonoumous-Aruco-Navigation-Competition-ROS2/tree/main',
    featured: true
  },


  {
    id: '3',
    title: 'Autonomus Dual Robots',
    description: ' Aruco Navigatioon robot made for competition',
    imageUrl: DualRobot,
    tags: [ 'C++' ,'Solidworks'],
    liveUrl: 'https://drive.google.com/file/d/1RHK2uEHMHc_EzkDPTjifEKl-1gp5lR_E/view?usp=drive_link',
    githubUrl: 'https://github.com/HashikaChathubhashaka/Autonoumous-Aruco-Navigation-Competition-ROS2/tree/main',
    featured: true
  },

  {
    id: '4',
    title: 'MCQ website',
    description: 'MCQ webstie made for Game competition',
    imageUrl: MCQ,
    tags: ['ReactJS', 'Rest-API', 'CSS'],
    liveUrl: '',
    githubUrl: 'https://github.com/HashikaChathubhashaka/MCQ-website-reactJS',
    featured: true
  },

  {
    id: '5',
    title: 'WATT with VAT-WebGL Game',
    description: ' Continous Running Game made for Game competition',
    imageUrl: GameImage,
    tags: ['Unity', 'C#'],
    liveUrl: 'https://github.com/HashikaChathubhashaka/FrosbiTe-Games/tree/phase4/Phase_3',
    githubUrl: 'https://github.com/HashikaChathubhashaka/FrosbiTe-Games/tree/phase4',
    featured: true
  },

  {
    id: '6',
    title: 'Flower Exchanger',
    description: ' Made for LESG company project',
    imageUrl: FlowerImage,
    tags: ['C++'],
    liveUrl: '',
    githubUrl: 'https://github.com/HashikaChathubhashaka/Flower-Exchange',
    featured: true
  },

  {
    id: '7',
    title: '3-DOF Robot Arm',
    description: 'Robotic Arm made for University Project',
    imageUrl: ArmImage,
    tags: ['C++'],
    liveUrl: '',
    githubUrl: 'https://github.com/HashikaChathubhashaka/Robotic-Arm-Arduino',
    featured: false
  },

  {
    id: '8',
    title: 'Brain Tumor Segmentation',
    description: 'Machine Learning project made as University Project',
    imageUrl: BrainImage,
    tags: ['Python', 'Tensorflow'],
    liveUrl: '',
    githubUrl: 'https://github.com/HashikaChathubhashaka/Brain-Tumor-Segmentation',
    featured: false
  },


  {
    id: '9',
    title: 'My Portfolio Site',
    description: 'This is the site you are currently viewing. Built with React and TypeScript.',
    imageUrl: portfolioImage,
    tags: ['ReactJS', 'TypeScript', 'CSS'],
    liveUrl: '',
    githubUrl: 'https://github.com/HashikaChathubhashaka/my-portfolio',
    featured: false
  },


];