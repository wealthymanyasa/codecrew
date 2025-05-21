
import React, { useRef } from 'react';
import { Activity, Code, Database, Layout, Server, Zap } from 'lucide-react';
import { useInViewport } from '@/lib/animations';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInViewport(cardRef);

  return (
    <div 
      ref={cardRef}
      className={`bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-sm group transition-all duration-500 hover:shadow-md hover:-translate-y-1 border border-gray-100 dark:border-gray-700/50 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="h-12 w-12 bg-gradient-to-br from-codecrew-purple to-codecrew-blue rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-foreground/70 dark:text-foreground/70">{description}</p>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInViewport(sectionRef);

  const services = [
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "Web Development",
      description: "Modern web applications built with Next.js, React, and other cutting-edge frameworks.",
    },
    {
      icon: <Layout className="h-6 w-6 text-white" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
    },
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Backend & APIs",
      description: "Scalable server-side solutions with Node.js, Python, and containerized microservices.",
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "AI & Machine Learning",
      description: "Intelligent systems that learn and adapt to your business needs and user behavior.",
    },
    {
      icon: <Server className="h-6 w-6 text-white" />,
      title: "DevOps & CI/CD",
      description: "Automated workflows for testing, building, and deploying your applications.",
    },
    {
      icon: <Activity className="h-6 w-6 text-white" />,
      title: "Performance Optimization",
      description: "Fine-tuning your applications for speed, efficiency, and better user experiences.",
    },
  ];

  return (
    <div 
      ref={sectionRef}
      id="services" 
      className="py-20 md:py-32 bg-gray-50 dark:bg-codecrew-dark/50"
    >
      <div className="absolute inset-0 bg-hero-pattern opacity-50 -z-10"></div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <p 
            className={`text-codecrew-blue font-medium mb-3 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            WHAT WE OFFER
          </p>
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all dark:text-white duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Our <span className="text-gradient">Services</span>
          </h2>
          <p 
            className={`text-foreground/70 dark:text-foreground/70 max-w-2xl mx-auto transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Comprehensive software development services tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={300 + index * 100}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;

// This was missed in the Lucide imports
import { ArrowRight } from 'lucide-react';
