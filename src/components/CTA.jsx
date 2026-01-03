import React from 'react';

export default function CTA() {
  return (
    <div className="relative bg-[#d6ad4c]-light dark:bg-slate-900/50 rounded-xl overflow-hidden my-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-white to-[#d6ad4c]/5 dark:from-slate-900 dark:via-slate-800 dark:to-background-dark -z-10"></div>
      <div className="flex flex-col items-center justify-center gap-6 px-4 md:px-10 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-text-light dark:text-text-dark">Sağlıklı Gülüşünüz İçin İlk Adımı Atın</h2>
        <p className="text-text-muted-light dark:text-text-muted-dark text-lg font-normal leading-relaxed max-w-2xl">Ücretsiz bir diş muayenesi için bugün randevu alın. Uzman ekibimiz sizin için burada.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a href="tel:+902582631020" className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-[#d6ad4c] text-slate-50 text-base font-bold leading-normal tracking-wide shadow-lg hover:shadow-xl hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300">
            <span className="truncate">Hemen Randevu Al</span>
          </a>
        </div>
      </div>
    </div>
  );
}
