import React from 'react';
import GlassCard from '../components/GlassCard';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 animate-fade-in-up">
      <div className="pt-12 pb-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Automora</h1>
        <p className="text-xl text-brand-text/70 leading-relaxed">
          We are a collective of engineers, designers, and AI researchers dedicated to pushing the boundaries of what software can achieve autonomously.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-brand-highlight">Our Mission</h2>
          <p className="text-brand-text/80 leading-relaxed mb-6">
            To democratize access to enterprise-grade AI infrastructure. We believe that powerful automation should not be restricted to tech giants. Every business deserves intelligent tools that amplify their human potential rather than replacing it.
          </p>
          <p className="text-brand-text/80 leading-relaxed">
            Founded in 2024, Automora emerged from the observation that while AI models were advancing rapidly, the tooling to integrate them reliably into everyday business logic remained primitive. We bridge that gap.
          </p>
        </div>
        
        <GlassCard className="flex items-center justify-center p-12 bg-gradient-to-br from-brand-secondary/50 to-transparent">
           <div className="text-center">
             <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight mb-2">99.9%</div>
             <div className="text-sm text-brand-text/60 uppercase tracking-widest font-semibold">Uptime on managed systems</div>
             
             <div className="w-full h-px bg-brand-text/10 my-8"></div>
             
             <div className="text-5xl font-extrabold text-brand-text mb-2">10M+</div>
             <div className="text-sm text-brand-text/60 uppercase tracking-widest font-semibold">Tasks automated daily</div>
           </div>
        </GlassCard>
      </div>

      <div className="pb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard>
            <h3 className="text-lg font-bold mb-3 text-brand-text">Pragmatic Intelligence</h3>
            <p className="text-brand-text/70 text-sm">We don't chase hype. We deploy models and systems that solve actual business problems with measurable ROI.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-bold mb-3 text-brand-text">Secure by Design</h3>
            <p className="text-brand-text/70 text-sm">Enterprise data privacy is paramount. We build isolated environments ensuring your data never trains public models.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-bold mb-3 text-brand-text">Elegant Architecture</h3>
            <p className="text-brand-text/70 text-sm">Complex systems shouldn't feel complex. We prioritize clean interfaces, robust error handling, and maintainable code.</p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default About;