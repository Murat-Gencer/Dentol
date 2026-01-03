import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1">
            <Header />
            <br/>
            <main className="flex-grow flex flex-col gap-16 md:gap-20">
              <Hero />
              <Services />
              <About />
              <Contact />
            </main>
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



