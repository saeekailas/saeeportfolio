import React, { useState, useEffect } from 'react';
import { 
  PERSONAL_INFO, 
  EXPERIENCES, 
  PROJECTS, 
  CERTIFICATIONS,
  CODING_PROFILES, 
  RESEARCH_ENGAGEMENTS, 
  PUBLICATIONS,
  BLOG_POSTS 
} from './constants';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / (totalScroll || 1)) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Profiles', id: 'profiles' },
    { label: 'Research', id: 'research' },
    { label: 'Publications', id: 'publications' },
    { label: 'Writing', id: 'writing' },
  ];

  // Common Social Icons Component to ensure consistency
  const SocialIcons = ({ className = "flex gap-6 text-2xl" }) => (
    <div className={className}>
      <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="hover:opacity-50 transition-opacity">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:opacity-50 transition-opacity">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" title="X (Twitter)" className="hover:opacity-50 transition-opacity">
        <i className="fa-brands fa-x-twitter"></i>
      </a>
      <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="hover:opacity-50 transition-opacity">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a href={PERSONAL_INFO.socials.email} title="Email Me" className="hover:opacity-50 transition-opacity">
        <i className="fa-solid fa-envelope"></i>
      </a>
    </div>
  );

  return (
    <div id="top" className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-black z-50 transition-all duration-150" style={{ width: `${scrollProgress}%` }}></div>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 flex flex-col lg:flex-row gap-12">
        
        {/* Sticky Sidebar Navigation (Desktop) */}
        <aside className="lg:w-64 lg:fixed lg:h-[calc(100vh-8rem)] hidden lg:flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-tighter mb-12 cursor-default uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <nav className="space-y-6">
              {navItems.map(item => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`} 
                  className="block text-xs uppercase tracking-widest font-bold opacity-30 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          <SocialIcons className="flex gap-4 text-xl" />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-80 space-y-40">
          
          {/* Hero Section */}
          <section className="min-h-[75vh] flex flex-col justify-center">
            <h1 className="text-7xl sm:text-9xl font-black tracking-tighter leading-[0.85] mb-12">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-col gap-10">
              <p className="text-2xl sm:text-3xl font-medium max-w-xl text-balance leading-tight">
                {PERSONAL_INFO.bio}
              </p>
              
              <div className="mt-6">
                <SocialIcons className="flex gap-10 text-4xl" />
              </div>
            </div>
          </section>

          {/* 1. EXPERIENCE */}
          <section id="experience" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-4xl font-black opacity-10">01</span>
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold">Experience</h2>
              <div className="h-px bg-black flex-1 opacity-10"></div>
            </div>
            
            <div className="space-y-24">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 group">
                  <div className="md:col-span-1">
                    <p className="text-sm font-bold opacity-40 group-hover:opacity-100 transition-opacity">{exp.period}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-3xl font-bold mb-2">{exp.role}</h3>
                    <p className="text-xl font-medium mb-6 opacity-80">{exp.company}</p>
                    <ul className="space-y-4 max-w-2xl">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-lg leading-relaxed flex gap-4">
                          <span className="mt-3 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. PROJECTS */}
          <section id="projects" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-4xl font-black opacity-10">02</span>
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold">Selected Projects</h2>
              <div className="h-px bg-black flex-1 opacity-10"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black bg-opacity-10 border border-black border-opacity-10">
              {PROJECTS.map((project) => (
                <a 
                  key={project.id} 
                  href={project.link || '#'} 
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  className="bg-white p-12 hover:bg-black hover:text-white transition-all duration-500 flex flex-col justify-between aspect-square group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <i className="fa-solid fa-arrow-up-right-from-square text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      <span className="text-[10px] uppercase tracking-widest font-black opacity-30 group-hover:opacity-100">Build No. {project.id}</span>
                    </div>
                    <h3 className="text-4xl font-black tracking-tighter mb-4">{project.title}</h3>
                    <p className="text-lg opacity-70 mb-8">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold border border-current px-2 py-0.5">{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* 3. CERTIFICATIONS */}
          <section id="certifications" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-4xl font-black opacity-10">03</span>
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold">Certifications</h2>
              <div className="h-px bg-black flex-1 opacity-10"></div>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="border border-black border-opacity-5 p-6 flex flex-col sm:flex-row sm:items-center justify-between group hover:border-opacity-100 transition-all">
                  <div>
                    <h3 className="text-xl font-bold">{cert.name}</h3>
                    <p className="text-sm opacity-50 uppercase tracking-widest font-medium mt-1">{cert.issuer} — {cert.date}</p>
                  </div>
                  <a 
                    href={cert.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 sm:mt-0 flex items-center gap-2 text-xs font-black uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
                  >
                    <i className="fa-solid fa-file-pdf"></i>
                    View PDF
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* 4. CODING PROFILES */}
          <section id="profiles" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-4xl font-black opacity-10">04</span>
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold">Coding Profiles</h2>
              <div className="h-px bg-black flex-1 opacity-10"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CODING_PROFILES.map((profile) => (
                <a 
                  key={profile.platform} 
                  href={profile.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black border-opacity-10 p-8 flex flex-col items-center text-center group hover:bg-black hover:text-white transition-all"
                >
                  <div className="text-3xl mb-4">
                    <i className={profile.icon}></i>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-black mb-1">{profile.platform}</p>
                  <p className="text-sm opacity-60 group-hover:opacity-100 transition-opacity mb-4">@{profile.username}</p>
                </a>
              ))}
            </div>
          </section>

          {/* 5. CONFERENCES & RESEARCH */}
          <section id="research" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-4xl font-black opacity-10">05</span>
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold">Research & Engagements</h2>
              <div className="h-px bg-black flex-1 opacity-10"></div>
            </div>

            <div className="space-y-12">
              {RESEARCH_ENGAGEMENTS.map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="hidden sm:block">
                    <div className="w-12 h-12 border border-black flex items-center justify-center font-black text-xs">
                      {item.type === 'Conference' ? 'CONF' : 'ENG'}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:underline underline-offset-8 decoration-1">{item.title}</h3>
                    <p className="text-xl opacity-60 mb-2">{item.venue}</p>
                    <p className="text-xs font-black uppercase tracking-widest opacity-40">{item.role} • {item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. PUBLICATIONS */}
          <section id="publications" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-4xl font-black opacity-10">06</span>
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold">Publications</h2>
              <div className="h-px bg-black flex-1 opacity-10"></div>
            </div>

            <div className="space-y-12">
              {PUBLICATIONS.length > 0 ? (
                PUBLICATIONS.map((pub, idx) => (
                  <div key={idx} className="group border-l-2 border-black border-opacity-5 pl-8 hover:border-opacity-100 transition-all">
                    <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:opacity-70">{pub.title}</h3>
                    <p className="text-lg mb-2 italic opacity-70">{pub.authors}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-black uppercase tracking-widest opacity-40">{pub.venue} • {pub.year}</span>
                      {pub.link && (
                        <a 
                          href={pub.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[10px] font-black uppercase border border-black px-2 py-0.5 hover:bg-black hover:text-white transition-colors"
                        >
                          View Paper
                        </a>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-10 border border-dashed border-black border-opacity-20 flex items-center justify-center">
                  <p className="text-sm uppercase tracking-[0.5em] font-black opacity-30">Coming Soon</p>
                </div>
              )}
            </div>
          </section>

          {/* 7. BLOGS / WRITING */}
          <section id="writing" className="scroll-mt-24 pb-20">
            <div className="flex items-center gap-4 mb-16">
              <span className="text-4xl font-black opacity-10">07</span>
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold">Writing</h2>
              <div className="h-px bg-black flex-1 opacity-10"></div>
            </div>

            <div className="space-y-16">
              {BLOG_POSTS.map((post, idx) => (
                <article key={idx} className="group flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-32 flex-shrink-0 pt-1">
                    <p className="text-sm font-black opacity-20 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">{post.date}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-black tracking-tight mb-4 group-hover:opacity-60 transition-opacity cursor-pointer leading-none">
                      {post.title}
                    </h3>
                    <p className="text-xl opacity-60 mb-6 leading-relaxed max-w-2xl">{post.excerpt}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1">{post.readingTime} READ</span>
                      <a 
                        href={post.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-bold uppercase tracking-widest border-b border-black"
                      >
                        Read Entry
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Global Footer */}
          <footer className="pt-20 border-t border-black border-opacity-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left opacity-40 hover:opacity-100 transition-opacity pb-10">
            <SocialIcons className="flex gap-6 text-2xl" />
            <div className="flex justify-center md:justify-end gap-12 items-center">
              <button 
                onClick={scrollToTop} 
                className="text-[10px] font-black uppercase tracking-widest cursor-pointer hover:underline underline-offset-4 transition-all"
              >
                Back to Top
              </button>
              <span className="text-[10px] font-black uppercase tracking-widest">© {new Date().getFullYear()} SAEE BARVE</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;