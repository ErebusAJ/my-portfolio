
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveLink?: string;
  repoLink?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Yatra-Bandhu",
      description: "A full-featured app with AI Travel planner, travel buddy and local guide connect.",
      techStack: ["Go", "PostgresSQL", "RestAPI", "Docker", "Cloudflare", "Git"],
      image: "./public/yatrabandhu.png",
      liveLink: "#",
      repoLink: "https://github.com/ErebusAJ/nith-yatra-bandhu"
    },
    {
      id: 2,
      title: "Skin Sage",
      description: "Illuminating Paths to Healthier Skin, Brighter Lives.",
      techStack: ["Django", "MySQL", "Tensorflow", "Python", "Git"],
      image: "https://assets.devfolio.co/hackathons/8b70d6a0eb494eaaa463c4868a50a55a/projects/d4cb72a9aa314788907a3d6d7ba01c93/e2e3da30-fd10-46f2-a766-96574e2a2888.jpeg",
      liveLink: "#",
      repoLink: "https://github.com/ErebusAJ/SkinSage"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A task management application with drag-and-drop functionality, team collaboration, and real-time updates.",
      techStack: ["React", "HTML", "CSS", "Js", "Git"],
      image: "./public/portfolio.png",
      liveLink: "#",
      repoLink: "#"
    }
    // {
    //   id: 4,
    //   title: "Weather Dashboard",
    //   description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
    //   techStack: ["JavaScript", "OpenWeather API", "Chart.js", "HTML/CSS"],
    //   image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop",
    //   liveLink: "#",
    //   repoLink: "#"
    // }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="section-title text-gray-900 dark:text-white">My Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each project was carefully crafted to solve specific problems and deliver exceptional user experiences.
        </p>
        
        <div className="relative">
          <Card className="overflow-hidden dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 items-center">
              {/* Project details */}
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-2 text-portfolio-dark dark:text-white transition-colors duration-300">
                  <span className="text-portfolio-primary dark:text-blue-400">#{currentIndex + 1}</span> {currentProject.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {currentProject.description}
                </p>
                
                <h4 className="font-medium text-portfolio-primary dark:text-blue-400 mb-2 transition-colors duration-300">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentProject.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 dark:bg-blue-900 text-portfolio-primary dark:text-blue-300 px-3 py-1 rounded-full text-sm transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {currentProject.liveLink && (
                    <Button asChild variant="default" className="bg-portfolio-primary hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300">
                      <a href={currentProject.liveLink} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  {currentProject.repoLink && (
                    <Button asChild variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-800 transition-colors duration-300">
                      <a href={currentProject.repoLink} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Project image */}
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden animate-fade-in drop-shadow-[0_0_10px_rgba(136,136,136,0.7)]">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
          
          {/* Navigation arrows */}
          <div className="flex justify-center mt-8 space-x-2">
            <Button 
              onClick={prevProject} 
              variant="outline"
              className="rounded-full w-12 h-12 p-0 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-700 transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </Button>
            
            <Button 
              onClick={nextProject} 
              variant="outline"
              className="rounded-full w-12 h-12 p-0 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-700 transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-6 bg-portfolio-primary dark:bg-blue-500' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
