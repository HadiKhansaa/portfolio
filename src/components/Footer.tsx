
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-lg font-medium text-foreground flex items-center">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                <span className="text-primary font-medium text-sm">H</span>
              </div>
              <span>Hadi Al Khansa</span>
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              Home
            </Link>
            <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              About
            </Link>
            <Link to="/projects" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              Projects
            </Link>
            <Link to="/contact" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-foreground/60">
          <p>© {currentYear} Hadi Al Khansa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
