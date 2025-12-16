import React from 'react';
import heroImage from '../assets/Gemini_Generated_Image_jmf4gtjmf4gtjmf4.png';

export default function Hero() {
  return (
    <section id="ana-sayfa" className="relative flex flex-col lg:flex-row items-center justify-between gap-12 px-4 py-20 md:px-10 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-white to-white dark:from-slate-900 dark:via-slate-800 dark:to-background-dark -z-10"></div>
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:w-1/2">
        <span className="text-sm font-bold uppercase tracking-widest text-secondary dark:text-secondary">DENTOL DİŞ KLİNİĞİ</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter">GÜLÜŞ BİR KARARDIR</h1>
        <p className="text-text-muted-light dark:text-text-muted-dark text-sm md:text-base font-normal leading-relaxed max-w-xl">Dentol Ağız ve Diş Sağlığı Polikliniği, modern teknolojiler ve etik hekimlik anlayışıyla ağız ve diş sağlığında ayrıcalıklı bir deneyim sunar.
Her hastamız için kişiye özel tedavi planları oluşturur, estetik ve fonksiyonu birlikte ele alırız.
Konforlu klinik ortamımızda sağlıklı, doğal ve özgüvenli gülüşler tasarlıyoruz.</p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a href="tel:+902582631020" className="flex min-w-[180px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary text-slate-50 text-base font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300">
            <span className="truncate">Randevu Al</span>
          </a>
          <button className="min-w-[180px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-transparent text-primary dark:text-secondary text-base font-bold leading-normal tracking-wide ring-2 ring-inset ring-primary dark:ring-secondary hover:bg-primary-light dark:hover:bg-secondary/10 transform hover:scale-105 transition-all duration-300">
            <span className="truncate">Hizmetlerimiz</span>
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 w-full max-w-lg relative">
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-2xl -z-10"></div>
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/20 dark:bg-primary/30 rounded-full blur-3xl -z-10"></div>
        <div className="w-full aspect-square rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out overflow-hidden">
          <img src={heroImage} alt="DENTOL Diş Polikliniği" className="w-full h-full object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
