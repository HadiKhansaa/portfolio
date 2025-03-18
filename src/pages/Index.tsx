
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <div className="bg-gradient-to-b from-background to-secondary/20 py-12">
        <Projects />
      </div>
      <Experience />
      <div className="bg-gradient-to-b from-background to-secondary/20">
        <Education />
        <Skills />
      </div>
      <Contact />
    </Layout>
  );
};

export default Index;
