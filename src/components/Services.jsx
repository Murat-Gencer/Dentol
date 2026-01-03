import React, { useState } from 'react';
import './Services.css';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('Tüm Hizmetler');

  const categories = [
    'Tüm Hizmetler',
    'Estetik Diş Hekimliği',
    'Cerrahi Tedaviler',
    'Koruyucu Diş Hekimliği',
    'Ortodonti',
    'Çocuk Diş Hekimliği'
  ];

  const services = [
    {
      id: 1,
      title: 'İmplant Tedavisi',
      description: 'Eksik dişlerin yerine, çene kemiğine yerleştirilen titanyum vidalar ile doğal dişe en yakın estetik ve fonksiyonel çözümler.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZVjI8Gh9YVaxprP-A2JiQ4EU95QP9iS-s1pTASPuU-bYF_ok6ZTDRMojRzNn-fuQPDm-gnjhgpjxobUVhW9Xvh9lLYaU7_x6CvDAlN7RDp2QH8qD5iXAoHXRm2bNoeY2jGi04mzhC2k7ahPoBwzyGmfiN1d99z92JmWP6iSrEoitnvZYkHC0IC_FX5TH1r0yAYta-kU-ZgJypqjCgtBOLRiRJ52LyZbp4UTCp4aiWJy6T8otxlFsELY_EnfyL2RXGNmuDrYikOSo',
      category: 'Cerrahi Tedaviler'
    },
    {
      id: 2,
      title: 'Diş Beyazlatma',
      description: 'Daha beyaz ve parlak bir gülüş için profesyonel diş beyazlatma yöntemleri.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV9xtgCGpdWj_twZgCVbVSzCjk6IlHRElpI3mBnmoCdmaB6S1n6IwZYaNiCQPb-VP7yIQ_HkFEQzCIedBky_rvqt02QzNEZL2X69MygPqHjCUVd7S8e6-96TGSGMPZo5qFMtirBsG3qBMDCUdnZbbB0fi97Lf21HpVQPp5kAVeDHRE2xbWuBRcUnmHbsybefhTLYCvgv8JxK5I06XuIbMwZOPlRWHJv914Fkr6Nokz0yWHIKisZu4Me3TUEWott0NRcvWkfwbGWvw',
      category: 'Estetik Diş Hekimliği'
    },
    {
      id: 3,
      title: 'Kanal Tedavisi',
      description: 'Enfekte olmuş diş pulpasını çıkararak dişi kurtaran ağrısız tedavi.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBafjdoSKEfum-yq5IuiuCYGWAoAU8KaXwWRe5zqTAZGDlp3ftks_0bsraA2gUMOUkWvMJuUqOpCek8I5QyNs5YRZUh3Xb8AD7e-ravabCe6npcoa1_SBphA0vKorJnJnm2DuN8Wlif7G8RNVjY6rvJ1qmB_xU3IigzS242uF1iywlN7537aJoe_kYMr9jRrhvE_mtBq37afXfWUg-B05FB7uds9-nzV3j1kFoIkYgeDium1TTbrY0hKsL0-E1WoosbLwuWyIhkdnk',
      category: 'Koruyucu Diş Hekimliği'
    },
    {
      id: 4,
      title: 'Zirkonyum kaplamalar',
      description: 'İnce Zirkonyum kaplamalarla gülüşünüzü yeniden şekillendiriyor, doğal ve estetik bir görünüm sağlıyoruz.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9H1O2Vc8jfHTBz_FL1DrpOM-AGbY6qKkZ7cj38SyM6pRyqEmhUF0BaFMTfkIruIdS_G6Fhgde7rWC_e1eugj4g90CfXgQKd5RK7dPtFFOaGZT8xs9-c1Kfpqjn6Fh0elDfke2vCV--JdgHzO0vKSEqKj4dqJctOPiVoNM3E9sgGEp7jIbyPLX-XcJQnCkuxd53USe0hiNGhtACEc_b111rYHm4AP-pAhGZwROp4sKeFCaWTxDuaHjFys8L2erLaRJx-alcDnNcK4',
      category: 'Estetik Diş Hekimliği'
    },
    {
      id: 5,
      title: 'Ortodonti',
      description: 'Her yaşa uygun ortodontik tedavilerle dişlerinizi düzeltiyor, sağlıklı bir çene yapısı oluşturuyoruz.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMj_SQXVCG0FdrrSSYz5OQF5ucDDHpguTQrNWXBbomYo9lw9nfx3DNNaZpeE69ecqxqKI5PW_iU12eRUn9qdZDytFyZoQZospLuqtymxAwmHkamFiBhWpfBJpO9llwhEXO_YdTalOPrvUXydTL22czp2VURKQAkBbMvW-pkUydExy2wA5Ce0IbhZFJ83UEgi2w9CaAFegcmwoVVYBqK10SEVIecH8SPbCbDV3tPYtiiFtb0wIDiBE03s7hBmuYx85vFByGNGGDUYo',
      category: 'Ortodonti'
    },
    {
      id: 6,
      title: 'Çocuk Diş Hekimliği',
      description: 'Çocuklarınızın diş sağlığını korumak ve olumlu bir diş hekimi deneyimi yaşatmak için özel yaklaşımlar.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx9xLk9lc7mXC1QnPKZ9TOIkvTl0wSWlIkZfBl0D5TAt2w35jCqES2f8I4v261NYuinclWhi3UBMIrzxispBrGO3k2_ue9p4wr2hlAQws4_VqZvqW0vIPt4QRF-_m2FrRCKD-aQSrTSqPZp_PYW5diYQITs8E8Dpa5EeAAvTbLDB1A_5V2hFXuikm3S0tYaHneINULR0i8IpKSOEWvHmZlXDWGmB1pf8fhuUdvnYUAcRVfV1CljeISKZIY0sA31L6odiFdQ2pIUmw',
      category: 'Çocuk Diş Hekimliği'
    }
  ];

  const filteredServices = activeCategory === 'Tüm Hizmetler' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="hizmetler" className="relative px-4 py-10 md:px-10 md:py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-white to-[#d6ad4c]/5 dark:from-slate-900 dark:via-slate-800 dark:to-background-dark -z-10"></div>
      <main className="flex flex-col items-center px-4 sm:px-8 lg:px-16 py-6 md:py-8">
        <div className="layout-content-container flex flex-col w-full max-w-5xl gap-10 md:gap-16">
          <section className="@container">
            <div className="@[480px]:p-0">
              <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-6 text-center" data-alt="Modern dental clinic interior with soft lighting" style={{backgroundImage: 'linear-gradient(rgba(16, 26, 34, 0.3) 0%, rgba(16, 26, 34, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnxY8haqxYrCA1AbsLKoSHPhf1I8iUnteQbBQBULm50jJ7mazNlZqufMQ_nRXmYRL8byx5MFLadM_SgL3TlnRhvje6lZFhkczbr_RHmIiyc5vXD-LLA2blNAqHNRLAUiUm3hZwGTnPOY13BOKi872Z3_os0CUPc82mms886oV6AJDBRhWM-_n-78BU7kwMyVufKvDQHLtLODXGNexflMlP38eFczwtYynYLp1pX0iRLTFjuza5CZGUEhJKDGBwbGfP60AYHnFhoHE")'}}> 
                <div className="flex flex-col gap-4">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">Gülüşünüzü Şekillendiren Modern Hizmetler</h1>
                  <h2 className="text-white font-normal leading-normal @[480px]:text-lg max-w-2xl mx-auto">Dentol olarak, en son teknoloji ve uzman kadromuzla size özel tedavi çözümleri sunuyoruz. İhtiyacınız olan tüm diş sağlığı hizmetlerini keşfedin.</h2>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Hizmet Kategorileri</h3>
            <div className="flex gap-2 sm:gap-3 p-3 flex-wrap justify-center">
              {categories.map((category) => (
                <div 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full pl-4 pr-4 transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-[#d6ad4c] text-slate-50' 
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-[#d6ad4c]/20 dark:hover:bg-[#d6ad4c]/30'
                  }`}
                >
                  <p className="text-sm font-medium leading-normal">{category}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className="flex flex-col gap-3 rounded-xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="service-image-wrapper w-full bg-center bg-no-repeat aspect-video bg-cover" style={{backgroundImage: `url("${service.image}")`}}></div>
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-normal">{service.title}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal mt-1 mb-3 flex-grow">{service.description}</p>
                  <a className="text-[#d6ad4c] text-sm font-bold leading-normal hover:underline" href="#">Detaylı Bilgi</a>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </section>
  );
}
