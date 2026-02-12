import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { useLanguage } from '../components/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 lg:px-12 animate-fade-in-up">
      <div className="pt-12 pb-16 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.contactPage.title}</h1>
        <p className="text-xl text-brand-text/70">
          {t.contactPage.subtitle}
        </p>
      </div>

      <div className="max-w-xl mx-auto pb-24">
        <GlassCard className="p-8 md:p-10">
          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in-up">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">{t.contactPage.status.successTitle}</h3>
              <p className="text-brand-text/70">{t.contactPage.status.successDesc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-brand-text/80">{t.contactPage.labels.name}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-brand-primary/50 border border-brand-text/10 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder={t.contactPage.placeholders.name}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-brand-text/80">{t.contactPage.labels.email}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-brand-primary/50 border border-brand-text/10 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    placeholder={t.contactPage.placeholders.email}
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-medium text-brand-text/80">{t.contactPage.labels.company}</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-brand-primary/50 border border-brand-text/10 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  placeholder={t.contactPage.placeholders.company}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-brand-text/80">{t.contactPage.labels.message}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-brand-primary/50 border border-brand-text/10 rounded-xl px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors resize-none"
                  placeholder={t.contactPage.placeholders.message}
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="w-full mt-2"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? t.contactPage.status.submitting : t.contactPage.status.send}
              </Button>
            </form>
          )}
        </GlassCard>
      </div>
    </div>
  );
};

export default Contact;