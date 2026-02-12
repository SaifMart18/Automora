import React from 'react';
import GlassCard from '../components/GlassCard';
import { useLanguage } from '../components/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 lg:px-12 animate-fade-in-up">
      <div className="pt-12 pb-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.aboutPage.title}</h1>
        <p className="text-xl text-brand-text/70 leading-relaxed">
          {t.aboutPage.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-brand-highlight">{t.aboutPage.missionTitle}</h2>
          <p className="text-brand-text/80 leading-relaxed mb-6">
            {t.aboutPage.missionP1}
          </p>
          <p className="text-brand-text/80 leading-relaxed">
            {t.aboutPage.missionP2}
          </p>
        </div>
        
        <GlassCard className="flex items-center justify-center p-12 bg-gradient-to-br from-brand-secondary/50 to-transparent">
           <div className="text-center">
             <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight mb-2">99.9%</div>
             <div className="text-sm text-brand-text/60 uppercase tracking-widest font-semibold">{t.aboutPage.stats.uptime}</div>
             
             <div className="w-full h-px bg-brand-text/10 my-8"></div>
             
             <div className="text-5xl font-extrabold text-brand-text mb-2">10M+</div>
             <div className="text-sm text-brand-text/60 uppercase tracking-widest font-semibold">{t.aboutPage.stats.tasks}</div>
           </div>
        </GlassCard>
      </div>

      <div className="pb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">{t.aboutPage.principlesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.aboutPage.principles.map((p: any, i: number) => (
            <GlassCard key={i}>
              <h3 className="text-lg font-bold mb-3 text-brand-text">{p.title}</h3>
              <p className="text-brand-text/70 text-sm">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;