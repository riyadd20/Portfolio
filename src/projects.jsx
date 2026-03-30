import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'DropGrid',
    points: [
      'Built real-time streetwear drop alerts using a DSL compiler with 16-thread parallel rule evaluation',
      'Scaled asynchronous processing by separating scraping and rule evaluation via RabbitMQ and multithreading',
      'Deployed Kubernetes-based system with Redis caching and Prometheus/Grafana monitoring for traffic spikes'
    ],
    tech: ['Python', 'Kubernetes', 'Redis', 'RabbitMQ', 'Prometheus', 'Grafana', 'Multithreading', 'Web Scraping', 'Docker'],
    link: 'https://github.com/riyadd20/DropGrid'
  },
  {
    id: 2,
    title: 'CulturaRAG',
    points: [
      'Engineered full-stack RAG system for querying PDF/DOCX/text with fast vector retrieval',
      'Eliminated external embedding APIs by building local pipeline, reducing inference cost to zero',
      'Implemented LoRA fine-tuning pipeline using HuggingFace with feedback-driven training data'
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'HuggingFace', 'LoRA', 'Docker'],
    link: 'https://github.com/riyadd20/CulturaRAG'
  },
  {
    id: 3,
    title: 'PocketLLM Portal',
    points: [
      'Built Dockerized LLM app with real-time streaming responses and persistent chat sessions',
      'Implemented rate-limited REST APIs with caching to reduce redundant LLM calls',
      'Designed microservices with health checks and monitoring dashboards for scalability'
    ],
    tech: ['Node.js', 'Express', 'Docker', 'REST APIs', 'LLMs'],
    link: '#'
  },
  {
    id: 4,
    title: 'Visual System Design Playground',
    points: [
      'Enabled real-time visualization of backend architectures and microservices',
      'Built interactive drag-and-drop simulator using React for architecture modeling',
      'Synchronized system state using Redis and WebSockets for real-time updates'
    ],
    tech: ['React', 'Spring Boot', 'Redis', 'WebSockets', 'Distributed Systems'],
    link: '#'
  },
  {
    id: 5,
    title: 'Resume Analyzer',
    points: [
      'Increased resume–job match accuracy by 15% over TF-IDF/keyword baselines',
      'Evaluated BERT vs MiniLM/MPNet and integrated Hugging Face embeddings',
      'Built low-latency app using FastAPI and Streamlit with cloud deployment'
    ],
    tech: ['Python', 'FastAPI', 'NLP', 'HuggingFace', 'Streamlit'],
    link: 'https://github.com/riyadd20/Resume-Analyzer'
  },
  {
    id: 6,
    title: 'WeatherSync — Real-Time Weather App',
    points: [
      'Built cross-platform weather app delivering real-time forecasts and visualizations',
      'Developed scalable backend APIs with Node.js and MongoDB for low-latency access',
      'Deployed on GCP with location-based forecasting and maps integration'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'GCP', 'Jetpack Compose'],
    link: 'https://drive.google.com/file/d/1NxNHhFMeFAfyoKMrz-_wzjO74SUlG-RQ/view?usp=sharing'
  },
  {
    id: 7,
    title: 'Gravity Flip Platformer Engine',
    points: [
      'Built modular 2D platformer engine with decoupled physics and gameplay systems',
      'Designed event-driven state machine for handling gravity, collisions, and player states',
      'Added telemetry logging for gameplay tuning and performance insights'
    ],
    tech: ['C#', 'Unity', 'Game Development', 'OOP', 'Design Patterns'],
    link: '#'
  },
  {
    id: 8,
    title: 'Photography Sharing & Recommendation Platform',
    points: [
      'Built secure photo-sharing platform with JWT authentication and user-scoped access',
      'Implemented collaborative filtering recommendation engine via Flask API',
      'Optimized MongoDB queries to reduce metadata retrieval latency'
    ],
    tech: ['React', 'MongoDB', 'Python', 'Flask', 'GCP', 'JWT Authentication', 'Collaborative Filtering'],
    link: 'https://github.com/riyadd20/Photography-Platform'
  },
  {
    id: 9,
    title: 'Attendance & Attentiveness Monitoring',
    points: [
      'Achieved 95% attendance accuracy using Siamese Networks and MTCNN',
      'Built real-time drowsiness detection with YOLOv5 achieving 90% precision',
      'Improved low-light detection by 40% using FSRCNN super-resolution'
    ],
    tech: ['Python', 'OpenCV', 'YOLOv5', 'Deep Learning', 'Computer Vision', 'Siamese Networks', 'MTCNN', 'FSRCNN'],
    link: '#'
  },
  {
    id: 10,
    title: 'Conversational Summarizer',
    points: [
      'Improved summarization accuracy by 15% using hybrid extractive-abstractive NLP',
      'Enhanced semantic parsing and entity recognition with spaCy and NLTK',
      'Optimized speech-to-text pipeline using Wav2Vec 2.0 and DNN (published research)'
    ],
    tech: ['Python', 'NLP', 'spaCy', 'NLTK', 'Wav2Vec', 'Deep Learning', 'Research'],
    link: 'http://www.jetir.org/papers/JETIR2311382.pdf'
  },
  {
    id: 11,
    title: 'Advanced Blog App',
    points: [
      'Built multi-user blogging platform with REST APIs and role-based access',
      'Optimized MySQL queries and pagination for improved performance',
      'Implemented dashboards for content management and user interaction'
    ],
    tech: ['Django', 'MySQL', 'JavaScript', 'REST APIs', 'Authentication'],
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
