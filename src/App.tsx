import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Blog from './components/Blog';
import PhoneMockup from './components/PhoneMockup';

function App() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="min-h-screen flex flex-col justify-center items-center text-center">
           
          <PhoneMockup />
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/Jarvis-byte" 
              className="hover:text-blue-400 transition-colors"
              onClick={() => {
                window.gtag('event', 'click', {
                  event_category: 'social',
                  event_label: 'github'
                });
              }}
            >
              <Github size={24} />
            </a>
            <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=arkam.career@gmail.com"
              className="hover:text-blue-400 transition-colors"
              onClick={() => {
                window.gtag('event', 'click', {
                  event_category: 'social',
                  event_label: 'email'
                });
              }}
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/arka-mazumder/" 
              className="hover:text-blue-400 transition-colors"
              onClick={() => {
                window.gtag('event', 'click', {
                  event_category: 'social',
                  event_label: 'linkedin'
                });
              }}
            >
              <Linkedin size={24} />
            </a>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} />
          </div>
        </section>
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Education />
      </main>

      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        <p>© 2024 • All rights reserved @Arka</p>
      </footer>
    </div>
  );
}

export default App;