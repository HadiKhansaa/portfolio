
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would typically come from an API or data store
  const projects = [
    {
      id: 1,
      title: 'Massively Parallel A* on the GPU',
      description: 'A concurrent GPU-based A* algorithm leveraging a bucket-based approach to enable massive parallelism.',
      longDescription: `
        Designed and implemented a concurrent GPU-based A* algorithm leveraging a bucket-based 
        approach to enable massive parallelism. Achieved significant performance improvements 
        over sequential CPU implementations and outperformed state-of-the-art parallel solutions, 
        including BGPQ and UAStar algorithms.
        
        The implementation focuses on optimizing the open list operations to maximize GPU parallelism.
        By using a bucket-based approach, the algorithm can process multiple nodes concurrently without
        the need for expensive synchronization operations.
      `,
      tags: ['CUDA', 'C++', 'Algorithms', 'Data Structures'],
      githubUrl: 'https://github.com/HadiKhansaa/Bucket_Astar',
      image: '/lovable-uploads/e3ea510d-a6ba-4b42-9b1b-490dec8f5ae4.png',
      technologies: ['CUDA', 'C++', 'Parallel Computing', 'GPU Programming', 'Pathfinding Algorithms'],
      challenges: [
        'Managing memory transfers between host and device',
        'Designing a data structure that allows for massively parallel operations',
        'Balancing work distribution across thousands of GPU threads',
        'Implementing efficient synchronization mechanisms'
      ],
      achievements: [
        'Significantly outperformed state-of-the-art parallel solutions',
        'Scaled efficiently to large problem sizes',
        'Reduced computation time by orders of magnitude compared to CPU implementations'
      ]
    },
    {
      id: 2,
      title: 'Dama AI Engine',
      description: 'State-of-the-art AI Engine in C++ that can calculate more than 1 Million moves/second.',
      longDescription: `
        Designed and implemented an AI Engine in C++ that is currently the state-of-the-art in playing 
        Dama (Turkish Draughts) professionally. The AI is optimized to be able to calculate more than 
        1 Million moves/second on a single thread on the CPU, reaching depths as high as 15, making it 
        capable of beating practically all professional players in the game.
        
        The engine implements various optimization techniques, including alpha-beta pruning with move ordering, 
        bitboard representation, transposition tables, and more to achieve its impressive performance.
      `,
      tags: ['C++', 'Python', 'AI', 'Game Development'],
      githubUrl: 'https://github.com/HadiKhansaa/Sombol1.0',
      image: '/lovable-uploads/d261ebad-de7e-474f-b67e-5f47e64d418f.png',
      technologies: ['C++', 'Python', 'Pygame', 'Minimax Algorithm', 'Alpha-Beta Pruning', 'Bitboards'],
      challenges: [
        'Optimizing the search algorithm to evaluate positions efficiently',
        'Implementing an effective board evaluation function',
        'Designing a memory-efficient board representation',
        'Creating a user-friendly interface for human players'
      ],
      achievements: [
        'Calculated over 1 million positions per second on a single CPU thread',
        'Reached search depths of up to 15 plies',
        'Created an AI capable of beating professional human players'
      ]
    },
    {
      id: 3,
      title: 'Learning-Augmented A* using LLMs',
      description: 'Research on using LLMs to enhance the performance of the A* algorithm.',
      longDescription: `
        Currently researching the topic of using ML (specifically LLMs) to enhance the performance of the A* 
        algorithm in terms of the nodes explored, time efficiency, and the path accuracy for approximate solutions.
        
        This novel approach combines traditional pathfinding algorithms with the capabilities of large language models
        to create more efficient heuristics that can guide the search process more effectively.
      `,
      tags: ['LLMs', 'RAGs', 'Python', 'Pytorch'],
      githubUrl: 'https://github.com/Fadel-Kassab/LLM-A-Star',
      image: '/lovable-uploads/2cc6ec9f-3efb-49b2-b978-a69cec75290f.png',
      technologies: ['Python', 'PyTorch', 'Large Language Models', 'RAG Systems', 'A* Algorithm'],
      challenges: [
        'Integrating LLM outputs into traditional search algorithms',
        'Training models to generate effective heuristics',
        'Balancing computational overhead of LLM inference with search efficiency',
        'Evaluating the performance in diverse problem domains'
      ],
      achievements: [
        'Developed a novel framework for integrating LLMs with pathfinding algorithms',
        'Ongoing research with promising preliminary results',
        'Exploring applications in navigation, logistics, and planning domains'
      ]
    },
    {
      id: 4,
      title: 'Memory Efficient Genome Assembler',
      description: 'A time and memory efficient genome assembly algorithm in C++ using the Burrows-Wheeler Transform.',
      longDescription: `
        Implemented a time and memory efficient genome assembly algorithm in C++ that reconstructs the genome 
        from a large set of reads. The algorithm leverages the Burrows-Wheeler Transform (BWT) as the primary 
        data structure, ensuring both memory efficiency and high performance.
        
        The assembler effectively handles the computational challenges associated with processing large genomic datasets
        while maintaining accuracy in the assembly process.
      `,
      tags: ['Bioinformatics', 'C++', 'Algorithms', 'Data Structures'],
      githubUrl: 'https://github.com/HadiKhansaa/genome-assembler-cpp',
      image: '/lovable-uploads/47248f82-e13b-4695-ad18-ddbf47c6bfc0.png',
      technologies: ['C++', 'Burrows-Wheeler Transform', 'Bioinformatics', 'String Algorithms', 'Memory Optimization'],
      challenges: [
        'Handling large genomic datasets with limited memory',
        'Implementing efficient string matching algorithms',
        'Resolving repetitive regions in the genome',
        'Optimizing for both time and space complexity'
      ],
      achievements: [
        'Developed a memory-efficient implementation using the BWT',
        'Successfully assembled genomes from large sets of short reads',
        'Achieved significant performance improvements compared to traditional approaches'
      ]
    },
    {
      id: 5,
      title: 'Information Retrieval System',
      description: 'A highly accurate IR system that matches patients to clinical trials with high accuracy and speed.',
      longDescription: `
        Implemented a highly accurate IR system that matches patients to clinical trials with high accuracy and speed.
        The system uses vector space models, probabilistic models, and language models to accurately match patients to
        relevant clinical trials based on their medical profiles.
        
        This project addresses the critical need for efficient matching of patients to appropriate clinical trials,
        potentially accelerating medical research while ensuring that patients have access to relevant treatment options.
      `,
      tags: ['Vector Space', 'Probabilistic Models', 'Language Models'],
      githubUrl: 'https://github.com/HadiKhansaa/Clinical-Trials-IR-System',
      image: '/lovable-uploads/9e86116f-d13a-4ca2-9d08-6344fe7cf0cb.png',
      technologies: ['Information Retrieval', 'Vector Space Models', 'Probabilistic Models', 'Language Models', 'Healthcare'],
      challenges: [
        'Processing and standardizing heterogeneous medical data',
        'Developing accurate matching algorithms for clinical context',
        'Balancing precision and recall in patient-trial matching',
        'Handling sparse and noisy data'
      ],
      achievements: [
        'Created a system with high accuracy in matching patients to relevant trials',
        'Implemented and compared multiple retrieval models',
        'Developed a solution that could potentially improve patient outcomes and accelerate clinical research'
      ]
    }
  ];
  
  const project = projects.find(p => p.id === Number(id));
  
  if (!project) {
    return (
      <Layout>
        <div className="section-container flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-3xl font-medium mb-4">Project Not Found</h1>
          <p className="text-foreground/70 mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/projects"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <article className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground mb-8 group transition-colors"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
          
          <div className="stagger-animation">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                {project.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-8">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-4 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
            
            <div className="bg-card rounded-lg overflow-hidden mb-10 aspect-video flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-lg text-foreground/80 whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-medium mb-4">Challenges</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-foreground/80">
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-medium mb-4">Key Achievements</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="text-foreground/80">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
