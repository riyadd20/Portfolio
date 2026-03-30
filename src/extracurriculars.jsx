import React from 'react';
import { motion } from 'framer-motion';

const activities = [
  {
    title: 'J. P. Morgan Chase College-to-Corporate Program',
    duration: 'May 2023',
    description: [
      'Selected for JPMorgan Chase’s College-to-Corporate program with hands-on training in Python, Alteryx, and AWS DeepRacer',
      'Secured 2nd place in an internal hackathon by building data-driven solutions under real-world constraints'
    ]
  },
  {
    title: 'Google Cloud Career Practitioner Path',
    duration: 'Jan 2023',
    description: [
      'Completed Google Cloud’s career path with hands-on labs in cloud computing and serverless architecture',
      'Built and deployed projects using GCP services including compute, storage, and cloud-native tools'
    ]
  },
  {
    title: 'NVIDIA Deep Learning Institute',
    duration: 'Nov 2025',
    description: [
      'Completed GPU Acceleration with C++ Standard Library course focused on parallel programming techniques',
      'Gained hands-on experience optimizing compute-intensive workloads using GPU acceleration'
    ]
  },
  {
    title: 'McKinsey Take You Forward Program',
    duration: 'Dec 2025',
    description: [
      'Selected for McKinsey’s mentorship and career development program',
      'Participated in consulting workshops, problem-solving sessions, and industry-led training'
    ]
  },
  {
    title: 'Events Head – Computer Society of India (DJCSI)',
    duration: 'Sep 2022 – Aug 2023',
    description: [
      'Led a 9-member team to organize technical workshops and national-level hackathons like CodeShastra',
      'Coordinated industry partnerships and speaker sessions, attracting 250+ participants',
      'Increased event attendance by 40% through strategic outreach and improved event formats'
    ]
  },
  {
    title: 'Publicity Head – National Social Scheme (DJNSS)',
    duration: 'Aug 2021 – Jul 2022',
    description: [
      'Directed outreach for blood donation drives and environmental initiatives',
      'Managed social media campaigns leading to a 40% increase in event turnout',
      'Designed and distributed promotional content reaching 1000+ students'
    ]
  },
];

const Extracurriculars = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-10 pb-16 text-[#d8d1f5] font-mono">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-purple-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Extracurriculars
        <motion.div
          className="w-32 h-[2px] mx-auto mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </motion.h2>

      {/* Activity Cards */}
      <div className="space-y-14">
        {activities.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#2c2547] border border-[#4d3d69] rounded-xl shadow-md p-7 transform transition-all duration-300 hover:scale-[1.015] hover:shadow-lg hover:border-[#6c5cae] hover:ring-2 hover:ring-[#a78bfa]/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-purple-100 max-w-[80%]">{item.title}</h3>
              <span className="text-xs px-3 py-1 rounded-full font-medium bg-[#3b3352] text-purple-300">
                {item.duration}
              </span>
            </div>
            <ul className="list-disc list-inside text-sm text-purple-200 space-y-1 mt-2">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Extracurriculars;
