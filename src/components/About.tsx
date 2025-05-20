import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  BookOpen,
  Code, // Generic icon for skills if specific one is missing
  User,
  Award,
  // Briefcase // Not used
} from 'lucide-react';
import {
  // FaHtml5, // Not used
  // FaCss3Alt, // Not used
  // FaJs, // Not used
  // FaReact, // Not used
  // FaNodeJs, // Not used
  FaFigma,
  // FaDatabase, // Not used
  FaGithub,
  FaDocker,
  FaLinux,
  // FaPython, // Using SiPythonIcon instead for consistency
  FaMicrosoft,
} from 'react-icons/fa';
import {
  // SiTypescript, // Not used
  // SiGraphql, // Not used
  // SiMongodb, // Not used
  // SiTailwindcss, // Not used
  SiFlutter,
  SiDjango,
  SiPostgresql,
  SiDart,
  SiCplusplus,
  SiMysql,
  SiAndroidstudio,
  SiPython as SiPythonIcon, // Aliased to avoid conflict and standardize
  SiSwagger,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiAmazonwebservices,
  SiGooglecloud,
  SiJenkins,
  SiGrafana,
  SiGo, // For Golang
} from 'react-icons/si';
import { cn } from '@/lib/utils'; // Assuming you have a utility for conditional class names

type AboutTabValue = 'education' | 'skills' | 'about';

interface TabConfig {
  value: AboutTabValue;
  label: string;
  icon: React.ElementType;
}

// Data remains the same as in your original code
const educationData = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    institution: "Chandigarh University",
    year: "2022 - 2026",
    description: "Specialized in Artificial Intelligence and Machine Learning", // Corrected "Artificail"
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

// Corrected icons for Go, Loki, Promtail
const skillsData: Array<{ id: number; name: string; icon: React.ElementType; color?: string }> = [
  { id: 1, name: "Golang", icon: SiGo, color: "#00ADD8" }, // Changed from FaGofore, updated color
  { id: 2, name: "REST API", icon: SiSwagger, color: "#85EA2D" }, // Updated color
  { id: 3, name: "Docker", icon: FaDocker, color: "#2496ED" }, // Updated color
  { id: 4, name: "Linux", icon: FaLinux, color: "#FCC624" },
  { id: 5, name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { id: 6, name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { id: 7, name: "Git & GitHub", icon: FaGithub, color: "#181717" }, // Darker GitHub color
  { id: 8, name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { id: 9, name: "Microsoft Azure", icon: FaMicrosoft, color: "#0078D4" },
  { id: 10, name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { id: 11, name: "Jenkins", icon: SiJenkins, color: "#D24939" },
  { id: 12, name: "Grafana", icon: SiGrafana, color: "#F46800" },
  { id: 13, name: "Loki", icon: Code, color: "#F4A261" }, // Changed from SiGrafana, used generic Code icon
  { id: 14, name: "Promtail", icon: Code, color: "#745E9D" }, // Changed from SiGrafana, used generic Code icon
  { id: 15, name: "Django", icon: SiDjango, color: "#092E20" }, // Django's official green
  { id: 16, name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { id: 17, name: "Dart", icon: SiDart, color: "#0175C2" },
  { id: 18, name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
  { id: 19, name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { id: 20, name: "C++", icon: SiCplusplus, color: "#00599C" },
  { id: 21, name: "Python", icon: SiPythonIcon, color: "#306998" }, // Using aliased SiPythonIcon
  { id: 22, name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { id: 23, name: "Keras", icon: SiKeras, color: "#D00000" },
  { id: 24, name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
];

const aboutData = {
  bio: "I'm a backend developer with over 2 years of experience in building scalable, high-performance applications. My journey in development started when I built my first backend system for a hackathon project in my CS 1st year, and since then, I’ve been fascinated by crafting efficient, reliable, and secure architectures.",
  experience: "I've worked on personal and team projects, designing robust APIs, optimizing databases, and ensuring seamless system integrations and containerization. My approach combines technical excellence with problem-solving, ensuring that backend systems are not just powerful but also scalable and maintainable.",
  interests: "When I'm not coding, you’ll find me exploring automation workflows, diving into system design concepts, or optimizing performance bottlenecks. I also enjoy gym, watching sci-fi movies, and experimenting with new recipes.",
  philosophy: "I believe that great software is built on a foundation of clean architecture and efficient performance. My goal is to develop backend systems that are fast, scalable, and secure, empowering businesses to deliver exceptional digital experiences."
};

const tabItems: TabConfig[] = [
  { value: 'about', label: 'About Me', icon: User },
  { value: 'education', label: 'Education', icon: BookOpen },
  { value: 'skills', label: 'Skills', icon: Award },
];

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AboutTabValue>('about');

  const renderTabContent = () => {
    // Increased scrollable height, responsive
    const scrollAreaHeight = "h-[500px] md:h-[450px] lg:h-[500px]";

    switch (activeTab) {
      case 'education':
        return (
          <ScrollArea className={cn(scrollAreaHeight, "pr-4")}>
            <div className="space-y-4">
              {educationData.map(item => (
                <Card key={item.id} className="p-4 sm:p-6 animate-fade-in bg-card hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 sm:p-3 rounded-full transition-colors">
                      {/* Preserved original icon color classes */}
                      <BookOpen className="text-portfolio-primary dark:text-blue-400 h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-md sm:text-lg text-foreground">{item.degree}</h3>
                      <p className="text-sm sm:text-base text-foreground/80">{item.institution}</p>
                      <p className="text-xs sm:text-sm text-foreground/60">{item.year}</p>
                      <p className="mt-2 text-sm sm:text-base text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        );

      case 'skills':
        return (
          <ScrollArea className={cn(scrollAreaHeight, "pr-4")}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {skillsData.map(skill => (
                <Card key={skill.id} className="p-3 sm:p-4 animate-fade-in flex flex-col items-center justify-center hover:shadow-md dark:hover:shadow-blue-900/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex flex-col items-center gap-2 p-2 sm:p-3">
                    <skill.icon style={{ color: skill.color }} className="h-10 w-10 sm:h-12 sm:w-12 mb-1 sm:mb-2" />
                    <h3 className="font-medium text-xs sm:text-sm text-center text-foreground">{skill.name}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        );

      case 'about':
      default:
        return (
          <ScrollArea className={cn(scrollAreaHeight, "pr-4")}>
            <Card className="p-4 sm:p-6 animate-fade-in bg-card hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-300">
              <div className="space-y-4 sm:space-y-6">
                {[
                  { title: 'Bio', content: aboutData.bio },
                  { title: 'Experience', content: aboutData.experience },
                  { title: 'Interests', content: aboutData.interests },
                  { title: 'Philosophy', content: aboutData.philosophy },
                ].map(section => (
                  <div key={section.title}>
                    {/* Preserved original heading color classes */}
                    <h3 className="font-bold text-lg sm:text-xl text-portfolio-primary dark:text-blue-400 mb-2 sm:mb-3">{section.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollArea>
        );
    }
  };

  return (
    // Preserved original section background color
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-foreground transition-colors mb-8 sm:mb-10 md:mb-12">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mt-6 sm:mt-10">
          {/* Left column - Buttons: flex-row on mobile, flex-col on md+ */}
          <div className="md:col-span-3 flex flex-col gap-2 sm:gap-4">
            {tabItems.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.value;
              return (
                <Button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  variant={isActive ? 'default' : 'outline'}
                  className={cn(
                    "justify-start text-left w-full transition-all duration-300 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base",
                    isActive
                      ? 'bg-portfolio-primary text-primary-foreground dark:bg-blue-600 dark:text-white'
                      : 'border-portfolio-primary text-portfolio-primary dark:border-blue-400 dark:text-blue-400 hover:bg-portfolio-primary/10 dark:hover:bg-blue-400/10'
                  )}
                >
                  <IconComponent className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {tab.label}
                </Button>
              );
            })}
          </div>

          {/* Right column - Content */}
          <div className="md:col-span-9 mt-4 md:mt-0">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;