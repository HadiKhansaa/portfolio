import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Massively Parallel A* on the GPU',
      description: 'A concurrent GPU-based A* algorithm leveraging a bucket-based approach to enable massive parallelism.',
      tags: ['CUDA', 'C++', 'Algorithms', 'Data Structures'],
      githubUrl: 'https://github.com/HadiKhansaa/Bucket_Astar',
      image: '/lovable-uploads/projectImage1.png',
      featured: true
    },
    {
      id: 2,
      title: 'Dama AI Engine',
      description: 'State-of-the-art AI Engine in C++ that can calculate more than 1 Million moves/second.',
      tags: ['C++', 'Python', 'AI', 'Game Development'],
      githubUrl: 'https://github.com/HadiKhansaa/Sombol1.0',
      image: '/lovable-uploads/projectImage4.png',
      featured: true
    },
    {
      id: 3,
      title: 'Learning-Augmented A* using LLMs',
      description: 'Research on using LLMs to enhance the performance of the A* algorithm.',
      tags: ['LLMs', 'RAGs', 'Python', 'Pytorch'],
      githubUrl: 'https://github.com/Fadel-Kassab/LLM-A-Star',
      image: '/lovable-uploads/projectImage3.png'
    },
    {
      id: 4,
      title: 'Memory Efficient Genome Assembler',
      description: 'A time and memory efficient genome assembly algorithm in C++ using the Burrows-Wheeler Transform.',
      tags: ['Bioinformatics', 'C++', 'Algorithms', 'Data Structures'],
      githubUrl: 'https://github.com/HadiKhansaa/genome-assembler-cpp',
      image: '/lovable-uploads/projectImage2.png'
    },
    {
      id: 5,
      title: 'Information Retrieval System',
      description: 'A highly accurate IR system that matches patients to clinical trials with high accuracy and speed.',
      tags: ['Vector Space', 'Probabilistic Models', 'Language Models'],
      githubUrl: 'https://github.com/HadiKhansaa/Clinical-Trials-IR-System',
      image: '/lovable-uploads/projectImage5.png'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-6">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
