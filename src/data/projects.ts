import { Project } from '../types/project';
import levelImage from './images/level.jpg'; // Adjust path as needed
import ArucoImage from './images/aruco navigation.jpeg'; // Adjust path as needed
import DualRobot from './images/dual robot.jpeg'; // Adjust path as needed
import MCQ from './images/MCQ site.jpg'; // Adjust path as needed
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
    liveUrl: '',
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
    title: 'Gaming competition',
    description: ' Aruco Navigatioon robot made for competition',
    imageUrl: ArucoImage,
    tags: ['Unity', 'C#'],
    liveUrl: '',
    githubUrl: 'https://github.com/HashikaChathubhashaka/Autonoumous-Aruco-Navigation-Competition-ROS2/tree/main',
    featured: true
  },
  {
    id: '6',
    title: 'Fast Line follower',
    description: ' Aruco Navigatioon robot made for competition',
    imageUrl: ArucoImage,
    tags: ['ESP32', 'C++'],
    liveUrl: '',
    githubUrl: 'https://github.com/HashikaChathubhashaka/Line-Rider',
    featured: false
  },

  // {
  //   id: '2',
  //   title: 'AI Task Manager',
  //   description: 'Smart task management application that uses AI to prioritize and categorize tasks. Built with React and OpenAI API.',
  //   imageUrl: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&q=80&w=1280',
  //   tags: ['React', 'OpenAI', 'TypeScript'],
  //   liveUrl: 'https://example.com',
  //   githubUrl: 'https://github.com',
  //   featured: true
  // },

];