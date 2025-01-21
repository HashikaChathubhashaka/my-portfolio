import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import "./profile.scss";
import ProfileImage from "./pp.jpg";
import "./aboutMain.css";
import "./profile.css";

export function AboutHero() {
  return (
    
    <div >


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-1 lg:gap-1">

    <div className="flex items-center justify-center">

    </div>
    <div className="custom-style">
        <h1 className="custom-heading black">Less Consume...! More Creative...! </h1>
    </div>
    
          <div className="flex items-center justify-center">


            <div className="avatar">

              <img
                src={ProfileImage}
                alt="Profile"
              />
              </div>


          </div>


          
          <div className="flex flex-col justify-center">
            <p className="mt-10 text-xl justify-center text-center">
 I am a final year undergraduate in Electronic and Telecommunication Engineering.
              </p>
            <p className="mt-2 text-xl justify-center text-center">
              Always looking for opportunities to <strong> Learn </strong> and <strong>Grow.</strong>
            </p>

          </div>



        </div>
      </div>
    </div>
  );
}