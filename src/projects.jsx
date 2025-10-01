import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Resume Analyzer',
    points: [
      'Increased resume–job match accuracy by 15% over TF-IDF/keyword baselines',
      'Evaluated BERT vs MiniLM/MPNet and integrated Hugging Face Inference API for lightweight cloud embeddings',
      'Delivered low-latency interactive app with FastAPI and Streamlit, deployed on Render + Streamlit Cloud'
    ],
    tech: ['LLM', 'Generative AI', 'NLP', 'FastAPI', 'Python', 'Streamlit'],
    link: 'https://github.com/riyadd20/Resume-Analyzer'
  },
  {
    id: 2,
    title: 'Visual System Design Playground',
    points: [
      'Enabled real-time visualization of backend architectures and microservices, improving system comprehension',
      'Built an interactive drag-and-drop simulator using React for easy architecture modeling',
      'Synchronized system state in real time via Redis and WebSockets'
    ],
    tech: ['React', 'Spring Boot', 'Redis', 'WebSockets'],
    link: '#'
  },
  {
    id: 3,
    title: 'WeatherSync — Real-Time Weather App',
    points: [
      'Delivered weekly/daily forecasts with interactive charts, improving user engagement',
      'Built Android app with MVVM Jetpack Compose',
      'Implemented RESTful Node.js APIs and MongoDB for scalable backend'
    ],
    tech: ['Java', 'Jetpack Compose', 'Node.js', 'MongoDB'],
    link: 'https://drive.google.com/file/d/1NxNHhFMeFAfyoKMrz-_wzjO74SUlG-RQ/view?usp=sharing'
  },
  {
    id: 4,
    title: 'Photography Sharing & Recommendation Platform',
    points: [
      'Increased user engagement via personalized photo recommendation',
      'Designed secure photo-sharing platform with React/JWT auth',
      'Implemented collaborative filtering via Flask API and deployed on GCP'
    ],
    tech: ['React', 'JavaScript', 'MongoDB', 'Python', 'GCP'],
    link: 'https://github.com/riyadd20/Photography-Platform'
  },
  {
    id: 5,
    title: 'Conversational Summarizer',
    points: [
      'Improved conversation summarization by 15% with a hybrid extractive-abstractive NLP pipeline',
      'Enhanced semantic parsing and entity recognition using spaCy and NLTK',
      'Optimized speech-to-text with Wav2Vec 2.0 and DNN and published findings in JETIR'
    ],
    tech: ['Wav2Vec 2.0', 'NLP', 'spaCy', 'NLTK'],
    link: 'http://www.jetir.org/papers/JETIR2311382.pdf'
  },
  {
    id: 6,
    title: 'Attendance & Attentiveness Monitoring',
    points: [
      'Achieved 95% student attendance accuracy with Siamese Networks for similarity-based recognition',
      'Attained 90% precision in real-time drowsiness monitoring by fine-tuning YOLOv5',
      'Improved low-light face detection robustness by 40% using MTCNN with FSRCNN super-resolution'
    ],
    tech: ['Python', 'OpenCV', 'YOLOv5', 'TensorFlow', 'MTCNN', 'Siamese Networks', 'FSRCNN'],
    link: '#'
  },
  {
    id: 7,
    title: 'Advanced Blog App',
    points: [
      'Created a blogging platform with a rich-text editor, REST APIs, and content filters',
      'Optimized backend with MySQL and pagination for smoother access and navigation',
      'Integrated user dashboards for personalized post tracking'
    ],
    tech: ['Django', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/riyadd20/Blog-App'
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
                target={typeof window !== "undefined" && window.innerWidth > 768 ? "_blank" : "_self"}
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
