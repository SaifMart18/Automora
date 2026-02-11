import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import { ArrowRightIcon, ZapIcon, CpuIcon, ChartIcon } from '../components/Icons';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 pt-20 pb-32 flex flex-col items-center text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-brand-accent/30 text-brand-highlight text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-highlight animate-pulse"></span>
          Next-Gen AI Solutions
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl">
          Automate the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Impossible</span>
        </h1>
        
        <p className="text-lg md:text-xl text-brand-text/70 max-w-2xl mb-10 leading-relaxed">
          Automora Studio builds bespoke AI systems that streamline workflows, unlock predictive insights, and accelerate your digital transformation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <NavLink to="/contact">
            <Button variant="primary" icon={<ArrowRightIcon />}>
              Start Building
            </Button>
          </NavLink>
          <NavLink to="/services">
            <Button variant="secondary">
              Explore Services
            </Button>
          </NavLink>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="container mx-auto px-6 lg:px-12 py-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligent Infrastructure</h2>
          <p className="text-brand-text/60 max-w-2xl mx-auto">We don't just write code; we architect autonomous systems that scale with your ambitions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard hoverEffect className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6">
              <ZapIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">Workflow Automation</h3>
            <p className="text-brand-text/70 text-sm leading-relaxed mb-6 flex-grow">
              Eliminate redundant tasks with intelligent agents that connect your entire software ecosystem seamlessly.
            </p>
            <NavLink to="/services" className="text-brand-highlight text-sm font-semibold flex items-center gap-1 group mt-auto">
              Learn more <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </GlassCard>

          <GlassCard hoverEffect className="flex flex-col items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-highlight/10 blur-[50px] rounded-full"></div>
            <div className="w-12 h-12 rounded-xl bg-brand-highlight/20 flex items-center justify-center text-brand-highlight mb-6">
              <CpuIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">Custom AI Models</h3>
            <p className="text-brand-text/70 text-sm leading-relaxed mb-6 flex-grow">
              Fine-tuned language and vision models designed specifically for your proprietary data and unique use cases.
            </p>
            <NavLink to="/services" className="text-brand-highlight text-sm font-semibold flex items-center gap-1 group mt-auto">
              Learn more <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </GlassCard>

          <GlassCard hoverEffect className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <ChartIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">Predictive Analytics</h3>
            <p className="text-brand-text/70 text-sm leading-relaxed mb-6 flex-grow">
              Transform raw data into actionable foresight using advanced machine learning algorithms.
            </p>
            <NavLink to="/services" className="text-brand-highlight text-sm font-semibold flex items-center gap-1 group mt-auto">
              Learn more <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 lg:px-12 py-24">
        <GlassCard className="text-center py-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 to-brand-highlight/10 opacity-50"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your reality?</h2>
            <p className="text-brand-text/70 mb-8 text-lg">
              Join industry leaders who are leveraging Automora to build the next generation of automated enterprises.
            </p>
            <NavLink to="/contact">
              <Button variant="primary" className="shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Schedule a Consultation
              </Button>
            </NavLink>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};

export default Home;