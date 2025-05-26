import { useState, useEffect, useRef } from 'react';

export const About = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const elementRefs = useRef([]);

  const frontendSkills = [
    "React",
    "TailwindCSS",
    "HTML",
    "CSS",
    "JavaScript",
  ];

  const backendSkills = [
    "Python",
    "Java",
    "C#",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "REST APIs",
    "Flask",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.dataset.elementId;
            setVisibleElements(prev => new Set([...prev, elementId]));
          }
        });
      },
      { threshold: 0.2 }
    );

    elementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div
          ref={(el) => (elementRefs.current[0] = el)}
          data-element-id="title"
          className={`transition-all duration-700 transform ${
            visibleElements.has('title')
              ? 'translate-y-0 opacity-100'
              : '-translate-y-8 opacity-0'
          }`}
        >
          <h2
  className="
    text-3xl font-bold mb-8 text-center
    text-white
    md:bg-gradient-to-r md:from-blue-500 md:to-cyan-400 
    md:bg-clip-text md:text-transparent
  "
  style={{
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  About Me
</h2>

        </div>

        <div
          ref={(el) => (elementRefs.current[1] = el)}
          data-element-id="main-card"
          className={`transition-all duration-700 transform ${
            visibleElements.has('main-card')
              ? 'translate-x-0 opacity-100'
              : '-translate-x-12 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm passionate about coding and love bringing ideas to life through software.  
              Creating useful, impactful applications is what drives me every day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                ref={(el) => (elementRefs.current[2] = el)}
                data-element-id="frontend"
                className={`rounded-xl p-6 hover:translate-y-1 transition-all duration-700 transform ${
                  visibleElements.has('frontend')
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2"> 
                  {frontendSkills.map((tech, key) => (
                    <span 
                      key={key} 
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      style={{ 
                        animationDelay: `${600 + key * 100}ms`,
                        animation: visibleElements.has('frontend') ? 'fadeInUp 0.5s ease-out forwards' : 'none',
                        opacity: visibleElements.has('frontend') ? 1 : 0
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div
                ref={(el) => (elementRefs.current[3] = el)}
                data-element-id="backend"
                className={`rounded-xl p-6 hover:translate-y-1 transition-all duration-700 transform ${
                  visibleElements.has('backend')
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2"> 
                  {backendSkills.map((tech, key) => (
                    <span 
                      key={key} 
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      style={{ 
                        animationDelay: `${600 + key * 100}ms`,
                        animation: visibleElements.has('backend') ? 'fadeInUp 0.5s ease-out forwards' : 'none',
                        opacity: visibleElements.has('backend') ? 1 : 0
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div
            ref={(el) => (elementRefs.current[4] = el)}
            data-element-id="education"
            className={`p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all duration-700 transform ${
              visibleElements.has('education')
                ? 'translate-y-0 translate-x-0 opacity-100'
                : 'translate-y-8 -translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Undergraduate in Computer Science</strong> - University Of Piraeus (2021-2025) 
              </li>
            </ul>
          </div>

          <div
            ref={(el) => (elementRefs.current[5] = el)}
            data-element-id="experience"
            className={`p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all duration-700 transform ${
              visibleElements.has('experience')
                ? 'translate-y-0 translate-x-0 opacity-100'
                : 'translate-y-8 translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">Junior IT Associate at ZERONET (Θ. Παπαπασχάλης - Ι. Πεσλής Ο.Ε.) (2023 - 2024)</h4>
                <p>Managed Microsoft systems including Azure AD, configured and maintained professional IT equipment, and supported network management and troubleshooting.</p>
              </div>
            </div>    
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;