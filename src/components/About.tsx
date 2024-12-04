import React from 'react';
import { TechStack } from './about/TechStack';
import { Experience } from './about/Experience';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-[1920px] px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            WHO AM I ?
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Passionate developer crafting exceptional digital experiences
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Experience />
          </div>
          <div className="lg:col-span-5">
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
