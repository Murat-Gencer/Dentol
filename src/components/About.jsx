import React from 'react';
import aboutImage from '../assets/NedenBiz4.png';

export default function About() {
  const features = [
    {
      icon: 'verified',
      title: 'Dinamik Ekip',
      description: 'Diş hekimlerimiz sizlere daha iyi hizmet verebilmek için kendilerini sürekli öğrenmeye adanmıştır.'
    },
    {
      icon: 'science',
      title: 'Modern Teknoloji',
      description: 'Hassas teşhisler ve etkili tedaviler için en son diş teknolojisini kullanıyoruz.'
    },
    {
      icon: 'sentiment_satisfied',
      title: 'Hasta Konforu',
      description: 'Tüm hastalarımız için rahat ve kaygısız bir ortam yaratıyoruz.'
    }
  ];

  return (
    <section id="hakkimizda" className="flex flex-col lg:flex-row items-center gap-16 px-4 py-20 md:px-10 md:py-24 bg-white dark:bg-background-dark">
      <div className="lg:w-1/2 w-full max-w-lg order-2 lg:order-1">
        <div className="w-full aspect-square rounded-xl shadow-2xl overflow-hidden">
          <img src={aboutImage} alt="Neden Dentol" className="w-full h-full object-cover object-top" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 lg:w-1/2 order-1 lg:order-2">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">Neden Dentol Kliniği'ni Seçmelisiniz?</h2>
        <p className="text-text-muted-light dark:text-text-muted-dark text-lg font-normal leading-relaxed">Konforunuz ve sağlığınız bizim önceliğimizdir. İleri teknolojiyi kişisel dokunuşla birleştiriyoruz.</p>
        <div className="flex flex-col gap-6 mt-6 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent dark:hover:bg-slate-900/50 transition-colors duration-200">
              <div className="flex-shrink-0 flex items-center justify-center size-12 rounded-full bg-primary-light dark:bg-secondary/10 text-primary dark:text-secondary">
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <div>
                <h4 className="text-lg font-bold leading-tight">{feature.title}</h4>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
