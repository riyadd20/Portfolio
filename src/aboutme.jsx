import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="max-w-6xl mx-auto px-6 pt-10 pb-16 text-[#dcd2f7] font-mono text-sm md:text-base space-y-8"
    >
      {/* Animated Section Title */}
                  <motion.h2
                    className="text-4xl font-bold text-center mb-16 text-purple-200"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    About Me
                    <motion.div
                      className="w-32 h-[2px] mx-auto mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />
                  </motion.h2>
      

      <div className="bg-[#2c2547] p-4 rounded-lg">
        <h3 className="text-purple-300 font-semibold mb-1">about_me</h3>
        <p>
          <i className="bi bi-emoji-smile mr-2 text-indigo-300"></i>Code, coffee, and curiosity—that’s my rhythm. I’m <strong className="text-[#e5d4ff]">Riya Deorukhkar</strong>—a USC Computer Science grad student diving deep into full-stack development and machine learning, one coffee-fueled project at a time. I love building interfaces that feel just right and tinkering with models that uncover surprising insights.  When I’m not deep in debugging mode, I’m usually fueling up with iced coffee during library work sessions, unwinding with quick NYT mini puzzles, and building Spotify playlists to match my coding flow.
        </p>
      </div>

      <div className="bg-[#2c2547] p-4 rounded-lg">
        <h3 className="text-purple-300 font-semibold mb-1">current_location</h3>
        <ul className="space-y-1">
          <li><i className="bi bi-geo-alt-fill mr-1 text-indigo-300" />&nbsp; <span className="text-[#f3e8ff]">Los Angeles, California</span></li>
          <li><i className="bi bi-buildings mr-1 text-indigo-300" />&nbsp; <span className="text-[#f3e8ff]">University of Southern California (MSCS)</span></li>
        </ul>
      </div>

      <div className="bg-[#2c2547] p-4 rounded-lg">
        <h3 className="text-purple-300 font-semibold mb-1">interests_and_hobbies</h3>
        <ul className="list-none space-y-2 text-[#E2E8F0]">
          <li><i className="bi bi-globe-americas mr-2 text-indigo-300"></i>Learning about cultures & languages (I speak 5!)</li>
          <li><i className="bi bi-cake2-fill mr-2 text-indigo-300"></i>Baking & trying new recipes</li>
          <li><i className="bi bi-book-half mr-2 text-indigo-300"></i>Reading – fiction & personal growth</li>
          <li><i className="bi bi-music-note-beamed mr-2 text-indigo-300"></i>Listening to music to recharge</li>
          <li><i className="bi bi-airplane-engines mr-2 text-indigo-300"></i>Travel and cultural exploration</li>
        </ul>

      </div>

      <div className="bg-[#2c2547] p-4 rounded-lg">
        <h3 className="text-purple-300 font-semibold mb-1">why_me</h3>
        <p>
          <i className="bi bi-patch-question mr-2 text-indigo-300"></i> I blend technical depth with creativity. I love building systems that are intuitive, scalable, and elegant. 
          Good software is like good art — thoughtful and user-focused.
        </p>
      </div>
    </motion.div>
  );
};


export default AboutMe;
