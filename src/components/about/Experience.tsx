import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [

  {
    company: 'Arimac Lanka (Private) Limited.',
    position: 'Intern Robotics Engineer',
    period: 'Nov 2023 - May 2024',
    description: 'Developed indoor navigation robot using ROS2.'
  },

  {
    company: 'University of Moratuwa',
    position: 'Electronic and Telecommunication Engineering Undergraduate',
    period: 'Aug 2020 - March 2025',
    description: 'Developed indoor navigation robot using ROS2.'
  },


];

export function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center ">
      {/* __PROFESSIONAL EXPERIENCE__ */}
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

          </div>
        ))}
      </div>
    </div>
  );
}