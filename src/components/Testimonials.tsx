import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Michele Mashonganyika',
    position: 'Product Lead',
    company: 'FinanceAI',
    image: '/images/testimonials/michele.avif',
    content: 'Working with CodeCrew was a game-changer for our startup. Their team helped us build a secure, high-performance financial app with complex AI integrations. They felt like true partners in our success.',
    rating: 5,
    tags: ['AI Integration', 'Fintech', 'Security']
  },
  {
    id: 2,
    name: 'Sarah Miles',
    position: 'CTO at TechForward',
    company: 'TechForward',
    image: '/images/testimonials/sarah.avif',
    content: 'CodeCrew transformed our legacy application into a modern, scalable platform. Their engineers are not just technically proficient, but also excellent communicators. The project was delivered ahead of schedule with better results than we expected.',
    rating: 5,
    tags: ['Web App', 'Migration', 'Performance']
  },
 
  {
    id: 3,
    name: 'Jack Chakauya',
    position: 'Director of Engineering',
    company: 'HealthTech Solutions Ltd',
    image: '/images/testimonials/jas.avif',
    content: 'CodeCrew\'s expertise in building HIPAA-compliant applications was exactly what we needed. Their ability to translate complex healthcare requirements into elegant code made them stand out from other dev shops we\'ve worked with.',
    rating: 5,
    tags: ['Healthcare', 'Compliance', 'UX Design']
  },
  {
    id: 4,
    name: 'David Chipatiso',
    position: 'Founder & CEO',
    company: 'eCommerce Accelerator',
    image: '/images/testimonials/david.avif',
    content: 'The team at CodeCrew doesn\'t just write code—they solve business problems. Their e-commerce platform development increased our conversion rates by 43% and cut page load times in half. Absolutely phenomenal work!',
    rating: 5,
    tags: ['E-commerce', 'Optimization', 'Analytics']
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToIndex = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-codecrew-dark/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <p className="text-codecrew-blue dark:text-codecrew-blue font-medium mb-3">
            CLIENT SUCCESS STORIES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300">
            What Our Clients Say
          </h2>
          <p className="text-foreground/70 dark:text-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the innovative companies we've helped build extraordinary digital experiences.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative overflow-hidden min-h-[500px] md:min-h-[400px] rounded-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-codecrew-purple/5 to-codecrew-blue/5 dark:from-codecrew-purple/10 dark:to-codecrew-blue/10 z-0 rounded-2xl"></div>
            
            <motion.div 
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              {/* Testimonial Content */}
              <div className="md:col-span-8 flex flex-col">
                <div className="mb-8 relative">
                  <Quote className="absolute -left-8 -top-6 text-codecrew-blue/20 w-16 h-16" />
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80 dark:text-foreground/80 italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[currentIndex].rating 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300 dark:text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {testimonials[currentIndex].tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-codecrew-blue/10 dark:bg-codecrew-blue/20 text-codecrew-blue rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center">
                    <div className="mr-4">
                      <h3 className="font-semibold text-lg dark:text-white">{testimonials[currentIndex].name}</h3>
                      <p className="text-sm text-foreground/70 dark:text-foreground/70">
                        {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Image */}
              <motion.div 
                className="md:col-span-4 flex justify-center md:justify-end"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-32 h-32 md:w-48 md:h-48">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-codecrew-blue to-codecrew-purple rotate-45"></div>
                  <div className="absolute inset-1 rounded-full bg-white dark:bg-black overflow-hidden">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/200x200.png?text=Client';
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-4 ">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-codecrew-purple w-6' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 " />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
