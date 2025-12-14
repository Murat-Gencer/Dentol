import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ayşe Yılmaz',
      service: 'Diş Beyazlatma',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyOKTjY4bd_IByVUuUCKaA6dynVkT8-m3CqCIu03VbkJqBkHKCod_FYi7GZF53ck7bCvVX-YS4GtWsca7O22kwaDKwUSIh1ycUE-7xJvAZVd_1faMG3Rckirc5blRqtm1te_2jzDMIh2T_nqDBUGSSMTYAj-qRHch8fBV8RStr5mBWZkZXe64LHN8KBx0ewKMq7pgPJccIoFqunt42H5y9vOXesvRHfkDB73uc26AwbLphdBEm1zCyxs9R5W4wM2LLZwhTk8h-3B8',
      comment: '"Dentol Kliniği\'ne geldiğimde endişelerim vardı ama doktorların profesyonelliği ve sıcaklığı sayesinde tüm süreç harika geçti. Gülüşüm hiç bu kadar güzel olmamıştı!"'
    },
    {
      name: 'Mehmet Kaya',
      service: 'İmplant Tedavisi',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdFAVXsWa3lC-neu-bFKvwScULFNhlbYdbrWZ92BIvIXRXmKQK0KXLpcDYJ33OrYUe8MKAnrG-qnKtfKjSPH37d320ts19-JCOLFFZokVltK3-7bBkZh4ORXsO67N6-hKzlJOOsNDPiiEZi1bl4YtfTbOlnMCmMIJ9Hr2lVys0aB7UJNcpntBreW0T-pnp1ZY0PNDL9pCQ-B3MBoxJICCYsSXtwoCOsJY1H3Fjho7CQFoRp9Az-T9tJdA3LDofPyUVXrFjiNUha9M',
      comment: '"İmplant tedavim boyunca gösterdikleri ilgi ve uzmanlık için tüm Dentol ekibine minnettarım. Sonuçlar beklentilerimin çok ötesinde. Herkese tavsiye ederim."'
    },
    {
      name: 'Elif Demir',
      service: 'Ortodonti',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFWjdeiospdqYopRMRqYP9SXf6mlFjKWW8JhE8snoC9A6WADY9trcAKhc2EFLuB-htpekng68aSk38mAVZ9uA9cHJjnDz2JapNHyiE2xYQjArzLe_rVHHcRvuIeEEDwsG8CpfMz8fHUAu8C7F35RiVM2CHZGMb6nUsoFBJpd9ndV4bS-n0PYrLMRLPk61bomcDyaylq2_pFJ4ZMBW1Dy8wf-3Nvr-0Ac11WHXMg7A1lZBo6XTexARZbWQcbRoxmLCLmZB3ncfw1tU',
      comment: '"Diş tellerimle olan yolculuğumda Dentol her zaman yanımdaydı. Şimdi mükemmel dişlere sahip olduğum için çok mutluyum. Teşekkürler Dentol!"'
    }
  ];

  return (
    <section className="px-4 py-20 md:px-10 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">Mutlu Hastalarımızdan Yorumlar</h2>
        <p className="text-text-muted-light dark:text-text-muted-dark text-lg font-normal leading-relaxed max-w-3xl">Hastalarımızın deneyimleri bizim için en değerli referanstır. İşte gülüşlerini bize emanet edenlerden bazıları.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col gap-6 p-8 bg-background-light dark:bg-slate-900/50 rounded-xl shadow-subtle dark:shadow-subtle-dark border border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-cover bg-center" style={{backgroundImage: `url("${testimonial.image}")`}}></div>
              <div>
                <h4 className="text-lg font-bold">{testimonial.name}</h4>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{testimonial.service}</p>
              </div>
            </div>
            <p className="text-text-muted-light dark:text-text-muted-dark font-normal leading-relaxed italic">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
