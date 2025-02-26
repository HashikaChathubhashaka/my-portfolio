import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';

export function ProjectsGrid() {
  const [filter, setFilter] = useState<'all' | 'featured'>('featured');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
      {/* <h2 
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mt-12">
          #PROJECTS
        </h2> */}
        
        <div className="mt-8 flex gap-4">

        <button
            onClick={() => setFilter('featured')}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              filter === 'featured'
                ? 'bg-pink-900 text-white'
                : 'bg-black-100 text-black-700 hover:bg-pink-200'
            }`}
          >
            Featured
          </button>


          <button
            onClick={() => setFilter('all')}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-pink-900 text-white'
                : 'bg-black-100 text-black-700 hover:bg-pink-200'
            }`}
          >
            All Projects
          </button>

        </div>

        
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}