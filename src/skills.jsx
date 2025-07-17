import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skills = {
  'Programming Languages': ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'Scala'],
  'Web & App Technologies': ['React', 'AngularJS', 'Flutter', 'Android (Kotlin)', 'Node.js', 'Flask', 'Django', 'HTML5', 'CSS', 'Tailwind CSS'],
  'Machine Learning & AI': ['TensorFlow', 'PyTorch', 'scikit-learn', 'Keras', 'OpenCV', 'spaCy', 'Streamlit UI'],
  'Databases & Data Analysis': ['R', 'Pandas', 'MySQL', 'PostgreSQL', 'MongoDB', 'Power BI', 'Tableau'],
  'Cloud & DevOps': ['AWS', 'Google Cloud', 'Docker', 'Git', 'GitHub']
};

const skillIcons = {
  Python: "/python.svg", Java: "/java.svg", C: "/c.svg", "C++": "/cpp.svg", JavaScript: "/javascript.svg", TypeScript: "/typescript.svg", Scala: "/scala.svg",
  React: "/react.svg", AngularJS: "/angularjs.svg", Flutter: "/flutter.svg", "Android (Kotlin)": "/kotlin.svg", "Node.js": "/nodejs.svg", Flask: "/flask.svg",
  Django: "/django.svg", HTML5: "/html5.svg", CSS: "/css.svg", "Tailwind CSS": "/tailwind-css.svg", TensorFlow: "/tensorflow.svg", PyTorch: "/pytorch.svg",
  "scikit-learn": "/scikit-learn.svg", Keras: "/keras.svg", OpenCV: "/opencv.svg", spaCy: "/spacy.png", "Streamlit UI": "/streamlit.svg",
  R: "/r.svg", Pandas: "/pandas.svg", MySQL: "/mysql.svg", PostgreSQL: "/postgresql.svg", MongoDB: "/mongodb.svg", "Power BI": "/power-bi.svg", Tableau: "/tableau.svg",
  AWS: "/aws.svg", "Google Cloud": "/gcp.svg", Docker: "/docker.svg", Git: "/git.svg", GitHub: "/github.svg"
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-6 pt-10 pb-16 text-[#d8d1f5] font-mono">
      {/* Animated Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-purple-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
        <motion.div
          className="w-32 h-[2px] mx-auto mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#2c2547] border border-[#4d3d69] rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-[1.015] hover:shadow-lg hover:border-[#6c5cae] hover:ring-2 hover:ring-[#a78bfa]/30"
          >
            <h3 className="text-lg font-bold mb-4 text-purple-100 border-b border-purple-600 pb-2">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03, y: -2 }}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#3c2c58] text-sm font-medium text-purple-200 hover:bg-[#4c3a6a] transition-all"
                >
                  {skillIcons[skill] && (
                    <img
                      src={skillIcons[skill]}
                      alt={`${skill} logo`}
                      className="w-5 h-5"
                    />
                  )}
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
