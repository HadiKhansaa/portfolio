
import React from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="section-title mx-auto">Get In Touch</h2>
        
        <p className="text-lg text-foreground/80 mb-8">
          Feel free to reach out if you're looking for a collaborator on a research project, 
          have questions about my work, or just want to connect.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a 
            href="mailto:hadi.kansa.950@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-card hover:bg-card/80 border border-border transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>hadi.kansa.950@gmail.com</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/hadi-al-khansa-987115253/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-card hover:bg-card/80 border border-border transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/HadiKhansaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-card hover:bg-card/80 border border-border transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </div>
        
        <form className="max-w-xl mx-auto">
          <div className="glass-panel rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your message"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
