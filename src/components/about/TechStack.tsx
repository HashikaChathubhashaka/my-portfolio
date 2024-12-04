import React from 'react';
import { 
  CircuitBoard, 
  Box, 
  Brain, 
  Bot, 
  Globe, 
  Layout, 
  Code2 
} from 'lucide-react';

const technologies = {
  'PCB': {
    icon: <CircuitBoard className="h-6 w-6" />,
    skills: ['Altium', 'Proteus']
  },
  '3D CAD': {
    icon: <Box className="h-6 w-6" />,
    skills: ['SolidWorks']
  },
  'Machine Learning': {
    icon: <Brain className="h-6 w-6" />,
    skills: ['TensorFlow', 'PyTorch']
  },
  'Robotics': {
    icon: <Bot className="h-6 w-6" />,
    skills: ['ROS2-Humble']
  },
  'Web Technologies': {
    icon: <Globe className="h-6 w-6" />,
    skills: ['REST API']
  },
  'Frontend': {
    icon: <Layout className="h-6 w-6" />,
    skills: ['ReactJS']
  },
  'Tools & Others': {
    icon: <Code2 className="h-6 w-6" />,
    skills: ['Git', 'Docker']
  }
};

export function TechStack() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
        Tech Stack
      </h2>

      <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {Object.entries(technologies).map(([category, { icon, skills }]) => (
          <div
            key={category}
            className="rounded-xl bg-white p-4 shadow-lg transition-all hover:shadow-xl"
          >
            <div className="flex items-center space-x-3">
              <div className="rounded-lg bg-indigo-600 p-2.5 text-white">
                {icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-50 px-3 py-1 text-sm text-gray-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}