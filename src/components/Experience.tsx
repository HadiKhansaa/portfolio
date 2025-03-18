
import React from 'react';
import { Calendar } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceItem = ({ title, company, period, description }: ExperienceItemProps) => {
  return (
    <div className="mb-10 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-border">
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2"></div>
      
      <div className="mb-2">
        <h3 className="text-xl font-medium">{title}</h3>
        <div className="text-foreground/70 flex items-center gap-2">
          <span>{company}</span>
          <span className="text-foreground/40">•</span>
          <span className="flex items-center gap-1 text-foreground/60 text-sm">
            <Calendar className="h-3.5 w-3.5" />
            {period}
          </span>
        </div>
      </div>
      
      <p className="text-foreground/80">
        {description}
      </p>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Research Assistant',
      company: 'American University of Beirut',
      period: 'July 2024 - Present',
      description: 'Conducting research on high-performance-computing (with a focus on GPU Computing), and Machine Learning (LLMs/RAGs).'
    },
    {
      title: 'Graduate Assistant',
      company: 'American University of Beirut',
      period: 'August 2023 - Present',
      description: 'Assisted in teaching and supervising CS students in courses focusing on the design and analysis of algorithms and data structures, including CMPS214, CMPS211, and CMPS201.'
    },
    {
      title: 'Software Engineer',
      company: 'Auxi',
      period: 'July 2024 - September 2024',
      description: 'Designed and implemented advanced features for a custom PowerPoint ribbon using the Interop framework, enhancing productivity for clients, primarily consultants.'
    },
    {
      title: 'Mobile Android Development Internship',
      company: 'Mobile Arts',
      period: 'July 2023 - September 2023',
      description: 'Designed and developed several mobile applications, leveraging diverse APIs to create versatile solutions.'
    },
    {
      title: 'Teaching Assistant',
      company: 'Lebanese University',
      period: 'October 2021 - June 2022',
      description: 'Assisted in teaching and tutoring students in the Introduction to Programming course.'
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      
      <div className="mt-10">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            title={experience.title}
            company={experience.company}
            period={experience.period}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
