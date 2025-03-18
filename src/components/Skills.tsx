
import React from 'react';
import { Code, Cpu, Database, FileCode, Languages, Layout, TerminalSquare } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory = ({ title, skills, icon }: SkillCategoryProps) => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-2 rounded-md text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="tag bg-secondary/50 text-secondary-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'CUDA', 'Python', 'Java', 'JavaScript', 'PHP', 'C#', 'Bash'],
      icon: <Code className="h-5 w-5" />
    },
    {
      title: 'Algorithms & Data Structures',
      skills: ['Design', 'Analysis', 'Optimization', 'Problem Solving'],
      icon: <FileCode className="h-5 w-5" />
    },
    {
      title: 'Concurrent Programming',
      skills: ['CPU Parallelism', 'GPU Programming', 'CUDA', 'Multithreading'],
      icon: <Cpu className="h-5 w-5" />
    },
    {
      title: 'Machine Learning',
      skills: ['LLMs', 'RAG Systems', 'PyTorch', 'TensorFlow'],
      icon: <Database className="h-5 w-5" />
    },
    {
      title: 'Frameworks',
      skills: ['Laravel', 'ASP .NET', 'JavaFx'],
      icon: <Layout className="h-5 w-5" />
    },
    {
      title: 'Other Skills',
      skills: ['Operating Systems', 'Networking', 'Game Development'],
      icon: <TerminalSquare className="h-5 w-5" />
    },
    {
      title: 'Languages',
      skills: ['English - Fluent', 'Arabic - Native'],
      icon: <Languages className="h-5 w-5" />
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            title={category.title}
            skills={category.skills}
            icon={category.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
