import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800/30">
      <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all">
          <div className="flex items-center gap-4">
            <GraduationCap className="text-blue-400" size={24} />
            <div>
              <h3 className="text-2xl font-semibold">Bachelor of Technology in Computer Science</h3>
              <p className="text-gray-400">Maulana Abul Kalam Azad University of Technology</p>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-2 text-gray-400">
            <Calendar size={16} />
            <span>September 2017 – August 2021</span>
          </div>
          
          <div className="mt-4 text-gray-300">
            <p>CGPA: <span className="text-blue-400 font-semibold">8.46</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;