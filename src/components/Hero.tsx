
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/60" />
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-grid-pattern" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="stagger-animation">
          <div className="inline-block">
            <span className="tag mb-4 text-sm font-normal">CS Graduate & Researcher</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mt-2 mb-4 max-w-4xl">
            Hadi Al Khansa
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-8">
            Research Assistant and Graduate Student at AUB, specializing in High-Performance Computing, 
            GPU Programming, and Machine Learning.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="https://github.com/HadiKhansaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-4 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/hadi-al-khansa-987115253/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-4 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:hadi.kansa.950@gmail.com" 
              className="flex items-center gap-2 py-2 px-4 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/projects"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              <span>About Me</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
