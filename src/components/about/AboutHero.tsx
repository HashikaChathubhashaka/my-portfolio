import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function AboutHero() {
  return (
    <div className="relative overflow-hidden bg-gray-50 py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm</span>
              <span className="block text-indigo-600">John Doe</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              A passionate full-stack developer with 5 years of experience in building web applications.
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <div className="mt-8 flex space-x-4">
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
                href="mailto:your.email@example.com"
                className="rounded-full bg-red-600 p-3 text-white transition-colors hover:bg-red-700"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
              alt="Profile"
              className="rounded-full object-cover shadow-2xl"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}