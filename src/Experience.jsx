import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Revergon Solutions',
    logo: '/revergon_logo.png',
    title: 'Data Engineer Intern',
    location: 'Mumbai, India',
    duration: 'Sep 2023 – Apr 2024',
    points: [
      'Engineered a scalable, distributed ETL pipeline on AWS (Lambda, S3, DynamoDB, API Gateway) for a healthcare app, optimizing Lambda functions and DynamoDB queries to reduce processing time by 15% on patient imaging data.',
      'Created Power BI dashboards with Python-driven data preprocessing and ML-based insights, aiding physiotherapists in assessments.',
      'Automated the real-time export of patient diagnosis reports to a Flutter-based application, increasing operational efficiency by 25%.'
    ],
    tech: ['Python', 'AWS', 'DynamoDB', 'Power BI'],
  },
  {
    company: 'Reliance Industries Ltd.',
    logo: '/reliance_logo.png',
    title: 'Software Engineering Intern',
    location: 'Mumbai, India',
    duration: 'Jun 2023 – Aug 2023',
    points: [
      'Developed a cross-platform collaboration app in Flutter, enabling profile management, project creation, and team integration, improving team coordination and workflow efficiency.',
      'Optimized structured data storage using JSON serialization and asynchronous local persistence (SharedPreferences), reducing app load time by 20% and improving offline access.',
      'Leveraged GetX for real-time notifications and state management, minimizing UI rebuilds and ensuring smooth, responsive UX.'
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'GetX'],
  }
];

const Experience = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-10 pb-16 text-[#d8d1f5] font-mono">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-purple-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
        <motion.div
          className="w-32 h-[2px] mx-auto mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </motion.h2>

      <div className="space-y-14">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#2c2547] border border-[#4d3d69] rounded-xl shadow-md p-7 transform transition-all duration-300 hover:scale-[1.015] hover:shadow-lg hover:border-[#6c5cae] hover:ring-2 hover:ring-[#a78bfa]/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-14 h-14 object-contain rounded border border-[#5a4b88] bg-white p-1"
              />
              <div>
                <h3 className="text-xl font-bold text-purple-100">{exp.title}</h3>
                <p className="text-base text-purple-300 mt-1">
                  <span className="text-indigo-400">@</span> {exp.company}
                </p>
                <p className="text-sm text-purple-400 mt-1">
                  <span className="text-indigo-300">
                    <i className="bi bi-geo-alt-fill mr-1" />
                  </span> {exp.location} &nbsp;|&nbsp;
                  <i className="bi bi-calendar-event mr-1 text-indigo-300" />&nbsp;{exp.duration}
                </p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-[15px] text-purple-200 pl-1 leading-relaxed">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs border border-purple-500 text-purple-200 bg-[#3c2c58]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
