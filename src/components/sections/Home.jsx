import { useState, useEffect } from 'react';

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-20 px-4">
        <div style={{ willChange: 'transform, opacity' }} className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-12 opacity-0 scale-95'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-white text-transparent leading-tight" style={{ willChange: 'transform, opacity' }}>Hi, I'm Vasilis!</h1>
        </div>

        <div
          className={`transition-all duration-1000 transform ${
            isLoaded
              ? 'translate-x-0 opacity-100'
              : '-translate-x-8 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            I'm a final-year Computer Science student at the University of Piraeus with a 
            strong passion for programming and building meaningful applications. 
            I enjoy turning ideas into real-world solutions through code and constantly seek 
            opportunities to expand my knowledge and skills in software development. 
            Whether it's developing mobile apps, crafting web experiences, or exploring new technologies.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 transform ${
            isLoaded
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex justify-center space-x-4">
            <div
              className={`transition-all duration-800 transform ${
                isLoaded
                  ? 'translate-y-0 translate-x-0 opacity-100 scale-100'
                  : 'translate-y-6 -translate-x-4 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <a 
                href="#projects" 
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-105 group"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            <div
              className={`transition-all duration-800 transform ${
                isLoaded
                  ? 'translate-y-0 translate-x-0 opacity-100 scale-100'
                  : 'translate-y-6 translate-x-4 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <a 
                href="#contact" 
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full transition-all duration-2000 ${
              isLoaded ? 'opacity-30 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{ 
              transitionDelay: '1200ms',
              animation: isLoaded ? 'float 6s ease-in-out infinite' : 'none'
            }}
          ></div>
          
          <div
            className={`absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full transition-all duration-2000 ${
              isLoaded ? 'opacity-40 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{ 
              transitionDelay: '1400ms',
              animation: isLoaded ? 'float 8s ease-in-out infinite reverse' : 'none'
            }}
          ></div>

          <div
            className={`absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full transition-all duration-2000 ${
              isLoaded ? 'opacity-25 scale-100' : 'opacity-0 scale-0'
            }`}
            style={{ 
              transitionDelay: '1600ms',
              animation: isLoaded ? 'float 10s ease-in-out infinite' : 'none'
            }}
          ></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(-15px) translateX(3px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(6, 182, 212, 0.4);
          }
        }
      `}</style>
    </section>
  );
};

export default Home;