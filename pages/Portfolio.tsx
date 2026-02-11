import React from 'react';
import GlassCard from '../components/GlassCard';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Nexus Support AI",
      category: "Autonomous Agents",
      image: "https://picsum.photos/id/1/600/400",
      description: "A customized LLM support system that reduced ticket resolution time by 78% for a major SaaS provider."
    },
    {
      title: "Predicta-Chain",
      category: "Data Analytics",
      image: "https://picsum.photos/id/2/600/400",
      description: "Predictive supply chain dashboard using historical data to forecast shortages 3 weeks in advance."
    },
    {
      title: "DocuParse Flow",
      category: "Workflow Automation",
      image: "https://picsum.photos/id/3/600/400",
      description: "End-to-end automated pipeline for extracting structured JSON from messy PDF legal documents."
    },
    {
      title: "Synapse CRM",
      category: "LLM Integration",
      image: "https://picsum.photos/id/4/600/400",
      description: "Voice-activated CRM interface for field sales reps, transcribing and summarizing meetings automatically."
    }
  ];

  return (
    <div className="relative w-full animate-fade-in-up">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle,var(--grid-color)_1px,transparent_1px)] bg-[size:3rem_3rem]"
          style={{ 
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)' 
          }}
        ></div>
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] animate-pulse-slow mix-blend-screen" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="pt-12 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Selected Works</h1>
          <p className="text-xl text-brand-text/70 max-w-2xl">
            Real-world applications of our intelligence systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
          {projects.map((project, index) => (
            <GlassCard key={index} hoverEffect className="p-0 overflow-hidden flex flex-col group">
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-primary/80 backdrop-blur-md border border-brand-text/10 text-brand-text">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-brand-text/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;