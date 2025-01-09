import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import "./profile.scss";
import ProfileImage from "./pp.jpg"
export function AboutHero() {
  return (
    
    <div >

<h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center ">
        WHO AM I?
      </h2>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center">
            {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm</span>
              <span className="block text-indigo-600">Hashika</span>
            </h1> */}
            <p className="mt-10 text-xl">
              I am a final year undergraduate at the University of Moratuwa, specializing in Electronic and Telecommunication Engineering.
              I am passionate about robotics and AI, and I am always looking for opportunities to learn and grow in these fields.
            </p>

          </div>
          <div className="flex items-center justify-center">

          <div className="avatar">

            <img
              src={ProfileImage}
              alt="Profile"
              className="avatar__image"
            />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}