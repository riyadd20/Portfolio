import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    id: 'usc',
    logo: '/usc_logo3.png',
    school: 'University of Southern California',
    location: 'Los Angeles, CA',
    duration: 'Aug 2024 – May 2026',
    degree: 'M.S. in Computer Science',
    gpa: '3.6/4.0',
    coursework: [
      'Analysis of Algorithms',
      'Web Technologies',
      'Data Science for Machine Learning',
      'Database Systems',
    ],
  },
  {
    id: 'djsce',
    logo: '/djsce_logo.png',
    school: 'D. J. Sanghvi College of Engineering',
    location: 'Mumbai, India',
    duration: 'Dec 2020 – May 2024',
    degree: 'B.Tech. in Information Technology (Honors in DevOps)',
    gpa: '9.16/10',
    coursework: [
      'Artificial Intelligence',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering',
      'Data Structures',
      'Machine Learning',
    ],
  },
];

const Education = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-10 pb-16 text-[#d8d1f5] font-mono">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-purple-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
        <motion.div
          className="w-32 h-[2px] mx-auto mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </motion.h2>

      <div className="space-y-14">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#2c2547] border border-[#4d3d69] rounded-xl shadow-md p-7 transform transition-all duration-300 hover:scale-[1.015] hover:shadow-lg hover:border-[#6c5cae] hover:ring-2 hover:ring-[#a78bfa]/30"
          >
            {/* School Header */}
            <div className="flex items-start gap-4 mb-4">
              <img
                src={edu.logo}
                alt={`${edu.id} logo`}
                className="w-14 h-14 object-contain rounded-full border border-[#4d3d69] bg-white"
              />
              <div>
                <h3 className="text-xl font-bold text-purple-100">{edu.school}</h3>
                <p className="text-base text-purple-400 mt-0.5">
                  <i className="bi bi-geo-alt-fill mr-1 text-indigo-300" />&nbsp;
                  {edu.location} &nbsp;|&nbsp;
                  <i className="bi bi-calendar-event mr-1 text-indigo-300" />&nbsp;
                  {edu.duration}
                </p>
                <p className="text-base text-purple-300 mt-1">{edu.degree}</p>
                <p className="text-sm text-purple-400">GPA: {edu.gpa}</p>
              </div>
            </div>

            {/* Coursework */}
            <div className="mb-2 mt-4">
              <p className="text-sm text-purple-300 font-semibold">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {edu.coursework.map((course, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-full text-xs font-medium border border-purple-500 bg-purple-800 bg-opacity-10 text-purple-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
