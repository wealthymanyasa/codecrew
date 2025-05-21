import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      number: '1000+',
      label: 'Projects Completed',
      description: 'Successfully delivered innovative solutions',
    },
    {
      number: '50+',
      label: 'Team Members',
      description: 'Expert developers and designers',
    },
    {
      number: '95%',
      label: 'Client Satisfaction',
      description: 'Happy clients and successful outcomes',
    },
    {
      number: '5+',
      label: 'Years Experience',
      description: 'Proven track record in the industry',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-100">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 text-codecrew-blue mb-4"
          >
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-2xl">About Us</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Who We Are
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We are a cutting-edge technology company dedicated to creating innovative digital solutions that transform businesses and empower developers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ rotateX: 360 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="bg-gray-800/50 dark:bg-gray-100/50 rounded-xl p-6 text-center hover:bg-gray-800/70 dark:hover:bg-gray-100/70 transition-all"
            >
              <div className="text-4xl font-bold text-blue-400 dark:text-blue-600 mb-2">{stat.number}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-800">{stat.label}</h3>
              <p className="text-gray-400 dark:text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-300 dark:text-white">
              To revolutionize the way businesses interact with technology by providing cutting-edge solutions that drive growth, efficiency, and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
