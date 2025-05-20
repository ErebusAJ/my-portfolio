
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Smartphone, 
  BarChart, 
  LineChart,
  Sparkle
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Backend Development",
      description: "Custom web services built with the latest technologies to deliver fast, responsive, and scalable systems.",
      icon: Code,
      color: "bg-blue-100 text-portfolio-primary"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless experiences across all devices.",
      icon: Smartphone,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 3,
      title: "DevOps",
      description: "Streamline your development pipeline with automated workflows, continuous integration, and efficient deployment strategies.",
      icon: Sparkle,
      color: "bg-pink-100 text-pink-600"
    },
    {
      id: 4,
      title: "ML Models",
      description: "Unlock the power of machine learning with custom models that turn raw data into accurate, predictable models.",
      icon: Sparkle,
      color: "bg-green-100 text-green-600"
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto">
        <h2 className="section-title">My Services</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          I offer a range of services to help businesses build their digital presence and achieve their goals. 
          Here are the key areas where I can help you succeed.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(service => (
            <Card key={service.id} className="animate-fade-in">
              <CardHeader>
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${service.color} mb-4`}>
                  <service.icon size={28} />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-portfolio-primary hover:text-portfolio-primary hover:bg-blue-50 px-0">
                  Learn more
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
