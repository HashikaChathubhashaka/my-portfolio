import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="space-y-6  ">
      <h2 className="text-2xl font-bold text-gray-900 text-center ">Follow Me</h2>
      <div className=" space-x-4 flex justify-center">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gray-900 p-3 text-white transition-colors hover:bg-gray-700"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-blue-600 p-3 text-white transition-colors hover:bg-blue-700"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-sky-500 p-3 text-white transition-colors hover:bg-sky-600"
        >
          <Twitter className="h-6 w-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-pink-600 p-3 text-white transition-colors hover:bg-pink-700"
        >
          <Instagram className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}