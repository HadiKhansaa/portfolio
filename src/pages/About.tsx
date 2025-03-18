
import React from 'react';
import Layout from '../components/Layout';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import { Award, Book, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const awards = [
    "Ranked top ten in the ICPC Lebanese collegiate programming contest 2023",
    "100% GA scholarship covering all tuition fees at AUB",
    "Game development certificate acquired from AUB"
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <div className="stagger-animation">
            <div className="mb-12 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                About Me
              </h1>
              
              <p className="text-lg text-foreground/80 mb-6">
                I'm Hadi Al Khansa, a Computer Science graduate and researcher with a passion for high-performance computing, 
                algorithm design, and machine learning. Currently pursuing my Master's degree at the American University of Beirut,
                I focus on developing innovative solutions that push the boundaries of computational efficiency.
              </p>
              
              <p className="text-lg text-foreground/80 mb-6">
                My research interests include GPU computing, parallel algorithms, and the application of large language models 
                to enhance traditional algorithms. I enjoy tackling complex problems and creating elegant, optimized solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
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
            </div>
          </div>
        </div>
      </section>
      
      <Education />
      <Experience />
      
      <section id="awards" className="section-container bg-secondary/30">
        <h2 className="section-title">Awards & Certifications</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="glass-panel rounded-lg p-6 h-full flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-md text-primary shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <p className="text-foreground/80">{award}</p>
            </div>
          ))}
        </div>
      </section>
      
      <Skills />
    </Layout>
  );
};

export default About;
