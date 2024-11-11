import React from 'react';
import { Github, Globe } from 'lucide-react'; // Additional icons
import { siGoogleplay } from 'simple-icons/icons'; // Import the Google Play icon

const GooglePlayIcon = () => (
  <img
    src={`data:image/svg+xml;utf8,${encodeURIComponent(siGoogleplay.svg)}`}
    alt="Google Play Store"
    width={24}
    height={24}
    style={{ filter: 'invert(1)' }} // Apply a white tint using CSS filter
  />
);

const Projects = () => {
  const projectData = [
    {
      title: 'Gate Pulse',
      description: 'A sophisticated gatekeeper details app for automating entry/exit records of office personnel',
      techStack: ['Kotlin', 'Room Database', 'MVC', 'Google Cloud', 'Firebase'],
      link: 'https://github.com/Jarvis-byte/Gate-Pulse',
      logo: Github, // Icon for GitHub link
      highlights: [
        'Reduced manual data entry by 30% and improved attendance accuracy',
        'Implemented offline access with Room Database, boosting user engagement by 50%',
        'Enhanced data security by 50% through admin access control system',
        'Integrated Google Cloud Functions for push notifications'
      ]
    },
    {
      title: 'MotiVerse',
      description: 'Motiverse is your daily source for positivity, wisdom, and motivation to start your day right',
      techStack: ['Kotlin', 'Room Database', 'Notification', 'MVVM', 'Google Cloud function'],
      link: 'https://play.google.com/store/apps/details?id=com.arka.quotify',
      logo: GooglePlayIcon, // Google Play icon for app link
      highlights: [
        'Daily motivational notifications to inspire users',
        'User-friendly interface with MVVM architecture',
        'Offline storage using Room Database',
        'Integrated Google Cloud Functions for dynamic content updates'
      ]
    }
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/30">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div 
        className={`max-w-4xl mx-auto ${
          projectData.length === 2 ? 'lg:flex lg:gap-6 lg:justify-between' : 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {projectData.map((project, index) => {
          const LogoIcon = project.logo; // Get the icon component
          return (
            <div key={index} 
                 className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all w-full mb-12 lg:mb-0">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <div className="flex gap-4">
                  <a href={project.link}
                    className="hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer">
                    <LogoIcon size={24} /> {/* Render the icon */}
                  </a>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{project.description}</p>

              <ul className="space-y-2 text-gray-300 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>• {highlight}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
