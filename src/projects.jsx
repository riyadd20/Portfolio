import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'WeatherSync',
    points: [
      'Developed a scalable Android app using Java and Jetpack Compose, leveraging MVVM architecture.',
      'Built a high-performance Node.js backend with MongoDB for persistent, low-latency storage.',
      'Engineered asynchronous favorites system ensuring non-blocking UI updates.'
    ],
    tech: ['Java', 'Jetpack Compose', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 2,
    title: 'SnapBook',
    points: [
      'Built a full-stack photography platform with image upload and client profile management.',
      'Integrated booking system using MongoDB for handling reservations and projects.',
      'Implemented collaborative filtering for smart photo recommendations.'
    ],
    tech: ['React', 'MongoDB', 'Python', 'GCP'],
    link: '#'
  },
  {
    id: 3,
    title: 'Advanced Blog App',
    points: [
      'Created a blogging platform with a rich-text editor, REST APIs, and content filters.',
      'Optimized backend with MySQL and pagination for smoother access and navigation.',
      'Integrated user dashboards for personalized post tracking.'
    ],
    tech: ['Django', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    link: '#'
  },
  {
    id: 4,
    title: 'OpSkill AI',
    points: [
      'Built a resume-job matcher using BERT-based NLP and Google Gemini API.',
      'Generated AI-written resumes and interview prep using LLM pipelines.',
      'Deployed FastAPI backend with Streamlit UI for real-time application.'
    ],
    tech: ['LLM', 'NLP', 'FastAPI', 'Streamlit'],
    link: '#'
  },
  {
    id: 5,
    title: 'Conversational Summarizer',
    points: [
      'Created an NLP framework using spaCy, TF-IDF, and Wav2Vec 2.0 for summarizing speech.',
      'Improved semantic understanding with hybrid extractive-abstractive methods.',
      'Boosted speech-to-text precision by 15% using deep neural models.'
    ],
    tech: ['Wav2Vec 2.0', 'NLP', 'spaCy', 'NLTK'],
    link: '#'
  },
  {
    id: 6,
    title: 'Attendance & Drowsiness Monitoring',
    points: [
      'Built face recognition system with Siamese Network & MTCNN achieving 95% accuracy.',
      'Used FSRCNN for image enhancement and YOLOv5 for attention detection.',
      'Automated attendance tracking with real-time alerts.'
    ],
    tech: ['OpenCV', 'YOLOv5', 'TensorFlow'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-10 pb-16 text-[#d8d1f5] font-mono">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-purple-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
        <motion.div
          className="w-32 h-[2px] mx-auto mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#2c2547] border border-[#4d3d69] rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-[1.015] hover:shadow-lg hover:border-[#6c5cae] hover:ring-2 hover:ring-[#a78bfa]/30"
          >
            <h3 className="text-lg font-bold text-purple-100 mb-3">{project.title}</h3>

            <ul className="list-disc list-inside text-sm text-purple-200 space-y-2">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs border border-purple-500 text-purple-200 bg-[#3c2c58]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                className="inline-block text-sm text-blue-400 mt-3 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View project ↗
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
