
import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <Layout>
      <div className="pt-32 md:pt-40">
        <Contact />
      </div>
    </Layout>
  );
};

export default ContactPage;
