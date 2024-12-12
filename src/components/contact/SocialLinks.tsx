import React from 'react';
// import { Github, Linkedin } from 'lucide-react';
import { FaDiscord,FaGithub, FaLinkedin } from "react-icons/fa";

export function SocialLinks() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 text-center ">Follow Me</h2>
      <div className=" space-x-4 flex justify-center">

      <a
          href="https://linkedin.com/in/hashika-chathubhashaka"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-600 p-3 text-white transition-colors hover:bg-blue-700"
        >
        <FaLinkedin className="h-6 w-6" />
        </a>

        <a
          href="https://github.com/HashikaChathubhashaka"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gray-900 p-3 text-white transition-colors hover:bg-gray-700"
        >
        <FaGithub className="h-6 w-6" />
        </a>

        <a
          href="https://discord.com/users/hashika-chathubhashaka"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#7289da] p-3 text-white transition-colors hover:bg-[#5a6f9e]"
        >
        <FaDiscord className="h-6 w-6" />
        </a>

      </div>

    </div>
  );
}