import React from 'react';
import { Code2, Database, Cloud } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="text-blue-400" size={24} />
            <h3 className="text-xl font-semibold">Languages</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li>• Kotlin (Proficient)</li>
            <li>• Java (Proficient)</li>
          </ul>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <Database className="text-blue-400" size={24} />
            <h3 className="text-xl font-semibold">Tools & Frameworks</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li>• Android Studio</li>
            <li>• Git</li>
            <li>• Retrofit</li>
            <li>• Room</li>
            <li>• Jetpack</li>
            <li>• Firebase</li>
          </ul>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="text-blue-400" size={24} />
            <h3 className="text-xl font-semibold">Cloud & Fundamentals</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            <li>• AWS</li>
            <li>• Google Cloud</li>
            <li>• DSA</li>
            <li>• OOP</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;