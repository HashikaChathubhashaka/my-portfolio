import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and secure payment processing.',
    imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '2',
    title: 'AI Task Manager',
    description: 'Smart task management application that uses AI to prioritize and categorize tasks. Built with React and OpenAI API.',
    imageUrl: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&q=80&w=1280',
    tags: ['React', 'OpenAI', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring dashboard with interactive maps and detailed forecasts.',
    imageUrl: 'https://images.unsplash.com/photo-1698778573682-346d219402b5?auto=format&fit=crop&q=80&w=1280',
    tags: ['React', 'Weather API', 'Charts.js'],
    githubUrl: 'https://github.com',
    featured: false
  }



];