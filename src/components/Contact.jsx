import React from "react";

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="relative px-4 py-16 md:px-10 md:py-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-white to-[#d6ad4c]/5 dark:from-slate-900 dark:via-slate-800 dark:to-background-dark -z-10"></div>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-7xl mx-auto items-start">
        <div className="lg:w-1/3 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark">
              İletişim ve Ulaşım
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark text-lg font-normal leading-relaxed">
              Size daha yakın olabilmek için merkezi bir konumdayız. Sorularınız
              için bize ulaşabilir veya kliniğimizi ziyaret edebilirsiniz.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d6ad4c] text-white">
                <span className="material-symbols-outlined text-2xl">
                  location_on
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-light dark:text-text-dark mb-1">
                  Adres
                </h4>
                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  Akkonak mahallesi Fatih caddesi Fatih Apartmanı no:41/A
                  <br />
                  Merkezefendi, Denizli 20150
                </p>
                <a
                  className="inline-flex items-center gap-1 text-primary dark:text-secondary font-medium text-sm mt-2 hover:underline"
                  href="https://maps.app.goo.gl/4cZookL7KWXhBwXK7"
                  target="_blank"
                >
                  Yol Tarifi Al{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d6ad4c] text-white">
                <span className="material-symbols-outlined text-2xl">call</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-light dark:text-text-dark mb-1">
                  Telefon &amp; E-posta
                </h4>
                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  +90 537 832 63 30
                </p>
                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  +90 258 263 10 20
                </p>
                <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                  dentoldispol@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d6ad4c] text-white">
                <span className="material-symbols-outlined text-2xl">
                  schedule
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text-light dark:text-text-dark mb-1">
                  Çalışma Saatleri
                </h4>
                <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-1 text-text-muted-light dark:text-text-muted-dark">
                  <span>Hafta İçi:</span>
                  <span>08:30 - 00:00</span>
                  <span>Cumartesi:</span>
                  <span>08:30 - 00:00</span>
                  <span>Pazar:</span>
                  <span>Kapalı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 w-full">
          <div className="relative w-full h-[450px] lg:h-[600px] rounded-2xl overflow-hidden shadow-subtle dark:shadow-subtle-dark border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
            <iframe
              allowfullscreen=""
              className="w-full h-full grayscale-[10%] hover:grayscale-0 transition-all duration-500"
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6307.319522041604!2d29.068342296961113!3d37.77457531832198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c73fa3c6226db1%3A0xa2bc0ef10a57f5ff!2sFatih%20Apt.%20No%3A41!5e0!3m2!1str!2str!4v1765714433030!5m2!1str!2str"
              title="Dentol Klinik Konumu"
              width="100%"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
