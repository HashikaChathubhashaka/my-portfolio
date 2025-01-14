import React from 'react';
import { TechStack } from './about/TechStack';
import { Experience } from './about/Experience';
import { AboutHero } from './about/AboutHero';
import Timeline from "./about/timeline"

export function About() {
  return (
    <div className="bg-gray-50 py-24 background " >
                  <AboutHero/>
                  
      <div className="mx-auto max-w-[1920px] px-6 sm:px-8 lg:px-12">
        
        <div className="mt-16 grid gap-8 lg:grid-cols-12">

          <div className="lg:col-span-7">

            <Timeline/>
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
