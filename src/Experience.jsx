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
      'Engineered scalable ETL pipelines on AWS (Lambda, S3, DynamoDB, API Gateway) for processing healthcare imaging data, decreasing average data processing time by 15%',
      'Built Python workflows generating anomaly detection insights and embedding into Power BI dashboards, accelerating clinical assessments',
      'Automated real-time export of diagnosis reports via a secure API to Flutter mobile app, reducing manual reporting time by 25%'
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
      'Developed a cross-platform collaboration app in Flutter, enhancing team workflow and coordination across 3 departments',
      'Optimized data storage with JSON serialization and asynchronous persistence (SharedPreferences), reducing load times by 20%',
      'Leveraged GetX for real-time notifications and state management, minimizing UI rebuilds and improving responsiveness'
    ],
    tech: ['Flutter', 'Dart', 'GetX', 'SharedPreferences (JSON serialization)'],
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
