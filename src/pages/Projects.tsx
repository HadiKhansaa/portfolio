
import React from 'react';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <Layout>
      <div className="pt-32 md:pt-40">
        <Projects />
      </div>
    </Layout>
  );
};

export default ProjectsPage;
