import { Project } from '../types/project';
import myImage from './images/level.jpg'; // Adjust path as needed

export const projects: Project[] = [
  {
    id: '1',
    title: 'Digital Spirit Level',
    description: ' digital Spirit Level capable of measuring angles in relation to vertical and horizontal axes.',
    imageUrl: myImage,
    tags: ['Solidworks', 'Altium', 'Arduino'],
    liveUrl: 'https://github.com/HashikaChathubhashaka/Digital-Sprit-Level/blob/main/video.mp4',
    githubUrl: 'https://github.com/HashikaChathubhashaka/Digital-Sprit-Level',
    featured: true
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