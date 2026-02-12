import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import { ArrowRightIcon, ZapIcon, CpuIcon, ChartIcon } from '../components/Icons';
import { useLanguage } from '../components/LanguageContext';

const Home: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-12 pt-20 pb-32 flex flex-col items-center text-center relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-brand-accent/30 text-brand-highlight text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-highlight animate-pulse"></span>
          {t.hero.badge}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-[1.15]">
          {t.hero.title} 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">
            {t.hero.titleHighlight}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-brand-text/70 max-w-2xl mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <NavLink to="/contact">
            <Button variant="primary" icon={<ArrowRightIcon className={lang === 'ar' ? 'rotate-180' : ''} />}>
              {t.hero.ctaPrimary}
            </Button>
          </NavLink>
          <NavLink to="/services">
            <Button variant="secondary">
              {t.hero.ctaSecondary}
            </Button>
          </NavLink>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="container mx-auto px-6 lg:px-12 py-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-brand-text/60 max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
          <GlassCard hoverEffect className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6">
              <ZapIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">{t.services.automation.title}</h3>
            <p className="text-brand-text/70 text-sm leading-relaxed mb-6 flex-grow">
              {t.services.automation.desc}
            </p>
            <NavLink to="/services" className="text-brand-highlight text-sm font-semibold flex items-center gap-1 group mt-auto">
              {t.services.learnMore} <ArrowRightIcon className={`w-4 h-4 transform transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </NavLink>
          </GlassCard>

          <GlassCard hoverEffect className="flex flex-col items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-highlight/10 blur-[50px] rounded-full"></div>
            <div className="w-12 h-12 rounded-xl bg-brand-highlight/20 flex items-center justify-center text-brand-highlight mb-6">
              <CpuIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">{t.services.aiModels.title}</h3>
            <p className="text-brand-text/70 text-sm leading-relaxed mb-6 flex-grow">
              {t.services.aiModels.desc}
            </p>
            <NavLink to="/services" className="text-brand-highlight text-sm font-semibold flex items-center gap-1 group mt-auto">
              {t.services.learnMore} <ArrowRightIcon className={`w-4 h-4 transform transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </NavLink>
          </GlassCard>

          <GlassCard hoverEffect className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <ChartIcon />
            </div>
            <h3 className="text-xl font-bold mb-3">{t.services.analytics.title}</h3>
            <p className="text-brand-text/70 text-sm leading-relaxed mb-6 flex-grow">
              {t.services.analytics.desc}
            </p>
            <NavLink to="/services" className="text-brand-highlight text-sm font-semibold flex items-center gap-1 group mt-auto">
              {t.services.learnMore} <ArrowRightIcon className={`w-4 h-4 transform transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </NavLink>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 lg:px-12 py-24">
        <GlassCard className="text-center py-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 to-brand-highlight/10 opacity-50"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-brand-text/70 mb-8 text-lg">
              {t.cta.desc}
            </p>
            <NavLink to="/contact">
              <Button variant="primary" className="shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                {t.cta.button}
              </Button>
            </NavLink>
          </div>
        </GlassCard>
      </section>
    </div>
  );
};

export default Home;