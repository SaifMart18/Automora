import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import { useLanguage } from '../components/LanguageContext';

const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 h-[60vh] flex flex-col items-center justify-center text-center animate-fade-in-up">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-brand-text/20 to-brand-text/5 select-none mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.notFound.title}</h2>
      <p className="text-brand-text/60 max-w-md mx-auto mb-8">
        {t.notFound.desc}
      </p>
      <NavLink to="/">
        <Button variant="outline">{t.notFound.button}</Button>
      </NavLink>
    </div>
  );
};

export default NotFound;