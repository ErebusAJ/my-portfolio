
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  BookOpen,
  Code,
  User,
  Award,
  Briefcase
} from 'lucide-react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaDatabase,
  FaGithub,
  FaGofore,
  FaDocker,
  FaLinux,
  FaPython
} from 'react-icons/fa';
import { SiTypescript, SiGraphql, SiMongodb, SiTailwindcss, SiFlutter, SiDjango, SiPostgresql, SiDart, SiCplusplus, SiMysql, SiAndroidstudio, SiPython, SiSwagger, SiTensorflow, SiKeras, SiPytorch } from 'react-icons/si';

type AboutTab = 'education' | 'skills' | 'about';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AboutTab>('about');

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "Chandigarh University",
      year: "2022 - 2026",
      description: "Specialized in Artificail Intelligence and Machine Learning",
    },
    {
      id: 2,
      degree: "High School",
      institution: "Shishu Niketan Sr. Sec. School",
      year: "2020 - 2022",
      description: "Higher education 11th/12th",
    },
    {
      id: 3,
      degree: "Metriculate",
      institution: "Dikshant International School",
      year: "2019 - 2020",
      description: "10th Scored 93.6%",
    },
  ];

  const skillsData = [
    { id: 1, name: "Golang", icon: FaGofore, color: "#E34F26" },
    { id: 2, name: "REST API", icon: SiSwagger, color: "#009688" },
    { id: 3, name: "Docker", icon: FaDocker, color: "#1572B6" },
    { id: 4, name: "Linux", icon: FaLinux, color: "#FCC624" },
    { id: 5, name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { id: 6, name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { id: 7, name: "Git & GitHub", icon: FaGithub, color: "#092E20" },
    { id: 8, name: "Django", icon: SiDjango, color: "#009688" },
    { id: 9, name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { id: 10, name: "Dart", icon: SiDart, color: "#0175C2" },
    { id: 11, name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
    { id: 12, name: "Figma", icon: FaFigma, color: "#F24E1E" },
    { id: 13, name: "C++", icon: SiCplusplus, color: "#00599C" },
    { id: 14, name: "Python", icon: SiPython, color: "#306998" },
    { id: 15, name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { id: 16, name: "Keras", icon: SiKeras, color: "#D00000" },
    { id: 17, name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  ];

  const aboutData = {
    bio: "I'm a passionate backend developer with over 2 years of experience in building scalable, high-performance applications. My journey in development started when I built my first backend system for a hackathon project in my CS 1st year, and since then, I’ve been fascinated by crafting efficient, reliable, and secure architectures.",
    experience: "I've worked on personal and team projects, designing robust APIs, optimizing databases, and ensuring seamless system integrations and containerization. My approach combines technical excellence with problem-solving, ensuring that backend systems are not just powerful but also scalable and maintainable.",
    interests: "When I'm not coding, you’ll find me exploring automation workflows, diving into system design concepts, or optimizing performance bottlenecks. I also enjoy gym, watching sci-fi movies, and experimenting with new recipes.",
    philosophy: "I believe that great software is built on a foundation of clean architecture and efficient performance. My goal is to develop backend systems that are fast, scalable, and secure, empowering businesses to deliver exceptional digital experiences."
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4">
              {educationData.map(item => (
                <Card key={item.id} className="p-6 animate-fade-in bg-card hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full transition-colors">
                      <BookOpen className="text-portfolio-primary dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{item.degree}</h3>
                      <p className="text-foreground/80">{item.institution}</p>
                      <p className="text-foreground/60 text-sm">{item.year}</p>
                      <p className="mt-2 text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        );

      case 'skills':
        return (
          <ScrollArea className="h-[400px] pr-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.map(skill => (
                <Card key={skill.id} className="p-4 animate-fade-in flex flex-col items-center justify-center hover:shadow-md dark:hover:shadow-blue-900/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex flex-col items-center gap-3 p-4">
                    <skill.icon style={{ color: skill.color }} className="h-12 w-12 mb-2" />
                    <h3 className="font-medium text-center text-foreground">{skill.name}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        );

      case 'about':
      default:
        return (
          <ScrollArea className="h-[400px] pr-4">
            <Card className="p-6 animate-fade-in bg-card hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-xl text-portfolio-primary dark:text-blue-400 mb-3">Bio</h3>
                  <p className="text-foreground/80 text-lg">{aboutData.bio}</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-portfolio-primary dark:text-blue-400 mb-3">Experience</h3>
                  <p className="text-foreground/80 text-lg">{aboutData.experience}</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-portfolio-primary dark:text-blue-400 mb-3">Interests</h3>
                  <p className="text-foreground/80 text-lg">{aboutData.interests}</p>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-portfolio-primary dark:text-blue-400 mb-3">Philosophy</h3>
                  <p className="text-foreground/80 text-lg">{aboutData.philosophy}</p>
                </div>
              </div>
            </Card>
          </ScrollArea>
        );
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="section-title text-foreground transition-colors">About Me</h2>

        <div className="grid md:grid-cols-12 gap-8 mt-10">
          {/* Left column - Buttons */}
          <div className="md:col-span-3 flex md:flex-col gap-4">
            <Button
              onClick={() => setActiveTab('about')}
              variant={activeTab === 'about' ? 'default' : 'outline'}
              className={`justify-start text-left w-full transition-all duration-300 ${activeTab === 'about'
                ? 'bg-portfolio-primary dark:bg-blue-600'
                : 'border-portfolio-primary text-portfolio-primary dark:border-blue-400 dark:text-blue-400'
                }`}
            >
              <User className="mr-2 h-5 w-5" />
              About Me
            </Button>

            <Button
              onClick={() => setActiveTab('education')}
              variant={activeTab === 'education' ? 'default' : 'outline'}
              className={`justify-start text-left w-full transition-all duration-300 ${activeTab === 'education'
                ? 'bg-portfolio-primary dark:bg-blue-600'
                : 'border-portfolio-primary text-portfolio-primary dark:border-blue-400 dark:text-blue-400'
                }`}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Education
            </Button>

            <Button
              onClick={() => setActiveTab('skills')}
              variant={activeTab === 'skills' ? 'default' : 'outline'}
              className={`justify-start text-left w-full transition-all duration-300 ${activeTab === 'skills'
                ? 'bg-portfolio-primary dark:bg-blue-600'
                : 'border-portfolio-primary text-portfolio-primary dark:border-blue-400 dark:text-blue-400'
                }`}
            >
              <Award className="mr-2 h-5 w-5" />
              Skills
            </Button>
          </div>

          {/* Right column - Content */}
          <div className="md:col-span-9">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
