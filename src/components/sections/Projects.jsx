import { useState, useEffect, useRef } from 'react';

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const projectRefs = useRef([]);

  const projects = [

    {
      id: 1,
      title: "FridgeChef",
      description: "FridgeChef is a smart Android app that helps users find delicious recipes based on the ingredients in their virtual pantry, with features like ingredient image recognition, step-by-step cooking instructions, and easy recipe sharing via social media.",
      skills: ["Java", "Android Studio", "REST APIs", "Firebase"],
      year: "2025",
      type: "Mobile Development",
      link: "https://github.com/VasilisVas1/FridgeChef"
    },
    {
      id: 2,
      title: "Fever Dream",
      description: "Fever Dream is a 3D adventure game developed in Unity using C# for Brackeys Game Jam 2025.1. The game follows a lumberjack on his journey to his cave for a nap, where unexpected challenges arise, aligning with the jam's theme, 'Nothing Can Go Wrong'.",
      skills: ["C#", "Unity"],
      year: "2025",
      type: "Game Development",
      link: "https://github.com/VasilisVas1/Brackeys_GameJam"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.dataset.projectId);
            setVisibleProjects(prev => new Set([...prev, projectId]));
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getSkillColor = (skill) => {
    const frontendSkills = ["React", "TailwindCSS", "HTML", "CSS", "JavaScript"];
    return frontendSkills.includes(skill) ? "bg-cyan-500/10 text-cyan-400" : "bg-blue-500/10 text-blue-400";
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-white text-transparent text-center" style={{ willChange: 'transform, opacity' }}>
          Projects
        </h2>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 hidden md:block"></div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[index] = el)}
                data-project-id={project.id}
                className={`relative transition-all duration-700 transform ${
                  visibleProjects.has(project.id)
                    ? 'translate-x-0 opacity-100'
                    : index % 2 === 0
                    ? '-translate-x-12 opacity-0'
                    : 'translate-x-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
                
                <div className={`md:ml-20 ${index % 2 === 1 ? 'md:mr-20 md:ml-0' : ''}`}>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(6,182,212,0.15)]">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-cyan-400 font-medium">{project.type}</span>
                          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                          <span className="text-sm text-gray-400">{project.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`${getSkillColor(skill)} py-1.5 px-3 rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-200`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mt-6 pt-4 border-t border-white/10">
                       <a href={project.link} target="_blank" rel="noopener noreferrer"className="flex-1 text-center border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 py-2 px-4 rounded-lg font-medium transition-all duration-200">
                        Source Code
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
        <p className="text-gray-400 mb-4">Want to see more of my work?</p>
            <a href="https://github.com/VasilisVas1" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white py-3 px-8 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
                View All Projects
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;