import React from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 py-4 sticky top-4 z-50">
      <div className=" flex items-center gap-3 text-text-light dark:text-text-dark">
        <div className="size-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
          <img src={logo} alt="Dentol Logo" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-bold">Dentol</h2>
      </div>
      <div className="flex flex-1 justify-end items-center gap-4 sm:gap-6">
        <div className="hidden md:flex items-center gap-8">
          <a className="text-[#d6ad4c] dark:text-secondary text-base font-bold tracking-wide" href="#ana-sayfa">Ana Sayfa</a>
          <a className="text-black dark:text-text-muted-dark text-base font-semibold tracking-wide hover:text-[#d6ad4c] dark:hover:text-secondary transition-colors duration-200" href="#hizmetler">Hizmetler</a>
          <a className="text-black dark:text-text-muted-dark text-base font-semibold tracking-wide hover:text-[#d6ad4c] dark:hover:text-secondary transition-colors duration-200" href="#hakkimizda">Hakkımızda</a>
          <a className="text-black dark:text-text-muted-dark text-base font-semibold tracking-wide hover:text-[#d6ad4c] dark:hover:text-secondary transition-colors duration-200" href="#iletisim">İletişim</a>
        </div>
        <a href="tel:+902582631020" className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-[#d6ad4c] text-slate-50 text-sm font-semibold tracking-wide hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-md">
          <span className="truncate">Randevu Alın</span>
        </a>
      </div>
    </header>
  );
}
