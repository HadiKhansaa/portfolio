
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'MS in Computer Science',
      institution: 'American University of Beirut',
      period: 'August 2023 - May 2025',
      gpa: '4.15'
    },
    {
      degree: 'BS in Computer Science with High Distinction',
      institution: 'Lebanese University',
      period: 'September 2020 - June 2023'
    }
  ];

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      
      <div className="mt-10 space-y-8">
        {education.map((item, index) => (
          <div key={index} className="glass-panel rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-3 mt-1">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              
              <div>
                <h3 className="text-xl font-medium">{item.degree}</h3>
                <p className="text-foreground/70">{item.institution}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 text-sm">
                  <span className="tag">{item.period}</span>
                  {item.gpa && <span className="tag">GPA: {item.gpa}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
