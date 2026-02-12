import React from 'react';
import GlassCard from '../components/GlassCard';
import { CpuIcon, ZapIcon, ChartIcon, CodeIcon } from '../components/Icons';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (index: number) => {
    const icons = [
      <CpuIcon className="w-10 h-10" />,
      <ZapIcon className="w-10 h-10" />,
      <CodeIcon className="w-10 h-10" />,
      <ChartIcon className="w-10 h-10" />
    ];
    return icons[index] || icons[0];
  };

  return (
    <div className="relative w-full animate-fade-in-up">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{ 
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)' 
          }}
        ></div>
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-brand-highlight/10 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="pt-12 pb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.servicesPage.title}</h1>
          <p className="text-xl text-brand-text/70">
            {t.servicesPage.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {t.servicesPage.items.map((service: any, index: number) => (
            <GlassCard key={index} className="flex flex-col p-8 group">
              <div className="mb-6 text-brand-highlight p-4 rounded-2xl bg-brand-highlight/10 inline-block self-start group-hover:scale-110 transition-transform duration-300">
                {getIcon(index)}
              </div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-brand-text/70 mb-8 flex-grow leading-relaxed">
                {service.desc}
              </p>
              <div className="pt-6 border-t border-brand-text/10">
                <h4 className="text-sm font-semibold text-brand-text/50 uppercase tracking-wider mb-4">{t.lang === 'ar' ? 'الميزات الرئيسية' : 'Key Features'}</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-brand-text/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center pb-20">
          <h3 className="text-2xl font-bold mb-6">{t.servicesPage.customAction}</h3>
          <NavLink to="/contact">
            <Button>{t.servicesPage.customButton}</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;