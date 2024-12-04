import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  // {
  //   company: 'Tech Solutions Inc.',
  //   position: 'Senior Full Stack Developer',
  //   period: '2021 - Present',
  //   description: 'Led development of enterprise-level applications, mentored junior developers, and implemented CI/CD pipelines.',
  //   achievements: [
  //     'Reduced application load time by 40%',
  //     'Implemented microservices architecture',
  //     'Led a team of 5 developers'
  //   ]
  // },
  {
    company: 'Arimac Lanka (Private) Limited.',
    position: 'Intern Electronics Engineer',
    period: 'Nov 2023 - May 2024',
    description: 'Developed indoor navigation robot using ROS2.',
    achievements: [
      'Creating a simulation for an indoor navigation robot with LiDAR, IMU, and depth camera using Gazebo.',
      'Developing a differential-drive physical robot that can navigate in indoor maps using the simulation implementation as a reference.',
      'Creating a simulation for a robot to follow a human in an indoor map using Gazebo.'
    ]
  }
];

export function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center ">
        Professional Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
          >
            <div className="flex items-center space-x-4">
              <div className="rounded-lg bg-indigo-600 p-3 text-white">
                <Briefcase className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                <p className="text-indigo-600">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{exp.description}</p>
            <ul className="mt-4 space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                  <span className="text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}