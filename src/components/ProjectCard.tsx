
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    image: string;
    featured?: boolean;
  };
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectProps) => {
  return (
    <div 
      className={`
        group relative rounded-lg overflow-hidden border border-border bg-card
        hover:shadow-md transition-all duration-300
        ${featured ? 'flex flex-col' : 'flex flex-col h-full'}
      `}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/70 transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
        
        <p className="text-foreground/70 text-sm mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <Link
        to={`/projects/${project.id}`}
        className="
          mt-auto p-3 text-sm text-center font-medium
          border-t border-border bg-card hover:bg-secondary
          transition-colors flex items-center justify-center gap-1
        "
      >
        <span>View Details</span>
        <ExternalLink className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default ProjectCard;
