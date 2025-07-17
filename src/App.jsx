import React, { useEffect, useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AboutMe from './aboutme';
import Education from './education';
import Experience from './Experience';
import Projects from './projects';
import Skills from './skills';
import Extracurriculars from './extracurriculars';
import Contact from './contact';

const roles = ["Software Developer", "Machine Learning Engineer"];
const scrollablePages = ['about', 'education', 'experience', 'projects', 'skills', 'extracurriculars', 'contact'];

const FloatingBinary = ({ char, delay, duration, top, left, x, y }) => (
  <motion.span
    className="absolute text-purple-400 text-lg md:text-xl font-mono select-none pointer-events-none"
    style={{ top: `${top}%`, left: `${left}%`, opacity: 0.15 }}
    initial={{ x: 0, y: 0 }}
    animate={{ x: [0, x, -x, 0], y: [0, y, -y, 0] }}
    transition={{ duration, delay, ease: "easeInOut", repeat: Infinity }}
  >
    {char}
  </motion.span>
);

function App() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const [currentSection, setCurrentSection] = useState('landing');
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  const contentRef = useRef(null);

  useEffect(() => {
    let timeout;
    const role = roles[currentRoleIndex];
    if (typing) {
      timeout = setTimeout(() => {
        setDisplayedText(role.slice(0, displayedText.length + 1));
        if (displayedText.length === role.length) setTyping(false);
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(role.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setTyping(true);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, 60);
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentRoleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const el = contentRef.current;
      const isScrollable = el.scrollHeight > el.clientHeight;
      setShowScrollArrow(isScrollable && el.scrollTop < 50);
    };

    const ref = contentRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
      handleScroll(); // run once on section change
    }
    return () => {
      if (ref) ref.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  const floatingDigits = useMemo(() =>
    Array.from({ length: 50 }, () => ({
      char: Math.random() > 0.5 ? '1' : '0',
      delay: Math.random() * 20,
      duration: 10 + Math.random() * 10,
      top: Math.random() * 100,
      left: Math.random() * 100,
      x: (Math.random() - 0.5) * 105,
      y: (Math.random() - 0.5) * 105,
    }))
  , []);

  const toggleMenu = () => {
    setMenuOpen(prev => {
      if (!prev) {
        setShowCircle(true);
        setTimeout(() => setShowCircle(false), 200);
      }
      return !prev;
    });
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'about': return <AboutMe />;
      case 'education': return <Education />;
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'extracurriculars': return <Extracurriculars />;
      case 'contact': return <Contact />;
      default:
        return (
          <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 md:gap-12 xl:gap-16 px-4 sm:px-6 md:px-10">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#e0d6f5] leading-tight">
                Hello, I’m Riya
              </h1>

              <div className="flex flex-col items-center md:items-start space-y-2">
                <div className="h-px w-40 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
                <p className="text-base sm:text-lg md:text-xl font-mono text-[#c2b6e3] break-words">
                  {displayedText}<span className="animate-pulse">|</span>
                </p>
                <div className="h-px w-40 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
              </div>

              <div className="flex justify-center md:justify-start gap-4 mt-4 flex-wrap">
                {[
                  { icon: 'linkedin', href: 'https://www.linkedin.com/in/riyadeorukhkar/' },
                  { icon: 'github', href: 'https://github.com/riyadd20' },
                  { icon: 'envelope-fill', href: 'mailto:riyadeorukhkar20@gmail.com' },
                  { icon: 'telephone-fill', href: 'tel:+1234567890' },
                  { icon: 'file-earmark-arrow-down-fill', href: 'https://drive.google.com/drive/folders/19o8UGFqQooK5cOHPf0KMMcq_suwkRqs3?usp=drive_link' }
                ].map((item, idx) => (
                  <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer">
                    <i className={`bi bi-${item.icon} text-white text-xl rounded-full p-2 hover:opacity-80 transition`} style={{ backgroundColor: "#4b3c64" }}></i>
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              className="w-full md:w-1/2 flex justify-center md:justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <img
                src="/laptop2.png"
                alt="Laptop"
                className="w-60 sm:w-72 md:w-[28rem] lg:w-[30rem] xl:w-[32rem] max-w-full"
              />
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0d6f5] to-[#2c2547] flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-[80rem] h-[53rem] bg-[#1e1b2e] text-white rounded-xl shadow-xl border border-[#3c2c58] flex flex-col overflow-hidden">

        {/* Header */}
        <div className="bg-[#3a2f53] px-4 py-[0.4rem] flex items-center justify-between flex-wrap gap-y-2 z-50 sticky top-0">
          <div className="flex items-center gap-2 overflow-x-auto min-w-0 flex-1" style={{ scrollbarWidth: 'none' }}>
            <style>{`::-webkit-scrollbar { display: none; }`}</style>
            <div className="flex gap-2 shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="flex gap-1 ml-5 text-[0.89rem] font-mono shrink-0">
              {[
                { label: "home.txt", key: "landing" },
                { label: "about_me.txt", key: "about" },
                { label: "education.txt", key: "education" },
                { label: "experience.txt", key: "experience" },
                { label: "projects.txt", key: "projects" },
                { label: "skills.txt", key: "skills" },
                { label: "extracurriculars.txt", key: "extracurriculars" },
                { label: "contact_me.txt", key: "contact" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setCurrentSection(item.key)}
                  className={`px-3 py-1 rounded-t-md border border-b-0 font-mono transition-all whitespace-nowrap
                    ${currentSection === item.key
                      ? 'bg-[#2b223c] text-purple-200 border-[#2b223c]'
                      : 'bg-[#3a2f53] text-purple-300 border-[#4d3d69] hover:bg-[#4d3d69]'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            className="z-50 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
          >
            <i className="bi bi-list text-2xl text-purple-200"></i>
          </motion.div>
        </div>

        {/* Menu Burst */}
        <AnimatePresence>
          {showCircle && (
            <motion.div
              className="absolute z-40 bg-white"
              style={{ top: 10, right: 14, width: 10, height: 10, borderRadius: '50%' }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 100, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-14 right-4 bg-[#372c4d] border border-[#4d3d69] rounded-md shadow-lg p-4 space-y-2 z-50 text-sm text-purple-200"
            >
              {[
                { label: "Home", key: "landing" },
                { label: "About Me", key: "about" },
                { label: "Education", key: "education" },
                { label: "Experience", key: "experience" },
                { label: "Projects", key: "projects" },
                { label: "Skills", key: "skills" },
                { label: "Extracurriculars", key: "extracurriculars" },
                { label: "Contact Me", key: "contact" },
              ].map((item) => (
                <li
                  key={item.key}
                  className="hover:underline cursor-pointer"
                  onClick={() => {
                    setCurrentSection(item.key);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Scrollable Content */}
        <div ref={contentRef} className="flex-1 overflow-y-auto relative p-4 md:p-8 scroll-smooth">
          {currentSection === 'landing' && (
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              {floatingDigits.map((digit, index) => (
                <FloatingBinary key={index} {...digit} />
              ))}
            </div>
          )}
          {renderContent()}

          {/* Scroll Down Arrow */}
          {scrollablePages.includes(currentSection) && showScrollArrow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-4 right-4 text-purple-300 animate-bounce pointer-events-none"
            >
              <i className="bi bi-chevron-double-down text-2xl" />
            </motion.div>
          )}
        </div>
      </div>
      {/* Footer */}
        <div className="absolute bottom-8 right-6 transform rotate-90 origin-bottom-right text-sm font-mono text-purple-300 tracking-wider">
          ~ made by riya deorukhkar ♡ ~
        </div>
    </div>
  );
}

export default App;
