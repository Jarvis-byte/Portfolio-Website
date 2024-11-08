import React from 'react';
import { Calendar } from 'lucide-react';
import kukuimg from '../images/kukufm.jpeg';
import tataimg from '../images/tata_neu.png';


const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
      
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={kukuimg} 
              alt="Kuku" 
              className="w-12 h-12 rounded-full border border-blue-400 object-contain" 
            />
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">KUKU FM</h3>
              <p className="text-gray-400">Software Developer Engineer</p>
            </div>
            <div className="ml-auto flex items-center gap-2 text-gray-400">
              <Calendar size={16} />
              <span>January 2024 - Present</span>
            </div>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li>• Developed Kuku FM apps in Kotlin, achieving 50M+ downloads and 4.5 rating</li>
            <li>• Built advanced video and audio players with ExoPlayer 2</li>
            <li>• Reduced crash rate by over 20% through optimization</li>
            <li>• Increased daily active users by 15% through UI/UX improvements</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Kotlin', 'Retrofit', 'Room', 'Dagger 2', 'MVVM', 'Firebase'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all">
          <div className="flex items-center gap-4 mb-4">
            <img 
               src={tataimg} 
              alt="TCS" 
              className="w-12 h-12 rounded-full border border-blue-400 object-cover" 
            />
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">Tata Consultancy Services</h3>
              <p className="text-gray-400">Android Engineer</p>
            </div>
            <div className="ml-auto flex items-center gap-2 text-gray-400">
              <Calendar size={16} />
              <span>August 2021 - January 2024</span>
            </div>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li>• Engineered Tata Neu APP with 10M+ downloads and 4.4-star rating</li>
            <li>• Increased user engagement by 40% through architecture improvements</li>
            <li>• Boosted data retrieval speed by 60% using Room Database</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Kotlin', 'Retrofit', 'Room', 'GCP', 'MVVM', 'Firebase'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
