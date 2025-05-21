import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

// Mock project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    industry: 'Retail',
    stack: ['React', 'Node.js', 'MongoDB'],
    outcome: 'Revenue Growth',
    beforeImage: '/images/projects/ecommerce-before.jpg',
    afterImage: '/images/projects/ecommerce-after.jpg',
    caseStudy: {
      title: 'How We Built the E-commerce Platform',
      description: 'Transforming a legacy retail system into a modern, scalable e-commerce platform.',
      challenges: [
        'Legacy system integration',
        'Scalability issues',
        'Performance optimization'
      ],
      solutions: [
        'Microservices architecture',
        'Real-time inventory management',
        'AI-powered recommendations'
      ]
    }
  },
  // Add more projects as needed
];

const industries = [...new Set(projects.map(project => project.industry))];
const stacks = [...new Set(projects.flatMap(project => project.stack))];
const outcomes = [...new Set(projects.map(project => project.outcome))];

const Portfolio = () => {
  const [filters, setFilters] = useState({
    industry: [],
    stack: [],
    outcome: []
  });

  const filteredProjects = projects.filter(project => {
    return (
      (!filters.industry.length || filters.industry.includes(project.industry)) &&
      (!filters.stack.length || project.stack.some(tech => filters.stack.includes(tech))) &&
      (!filters.outcome.length || filters.outcome.includes(project.outcome))
    );
  });

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-codecrew-dark/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 dark:text-white">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our projects and see how we solve real-world challenges with cutting-edge technology.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <button
                  className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all"
                  onClick={() => {
                    const industryFilters = filters.industry;
                    setFilters({ ...filters, industry: industryFilters.length ? [] : industries });
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <span>Industry</span>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {filters.industry.length ? filters.industry.join(', ') : 'All'}
                  </span>
                </button>
                {filters.industry.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg z-10"
                  >
                    <div className="p-2">
                      {industries.map(industry => (
                        <button
                          key={industry}
                          onClick={() => {
                            const industryFilters = [...filters.industry];
                            const index = industryFilters.indexOf(industry);
                            if (index > -1) {
                              industryFilters.splice(index, 1);
                            } else {
                              industryFilters.push(industry);
                            }
                            setFilters({ ...filters, industry: industryFilters });
                          }}
                          className="w-full flex items-center justify-between px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                        >
                          {industry}
                          <span className="text-gray-500 dark:text-gray-400">
                            {filters.industry.includes(industry) ? '✓' : ''}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            <div className="flex-1">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <button
                  className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all"
                  onClick={() => {
                    const stackFilters = filters.stack;
                    setFilters({ ...filters, stack: stackFilters.length ? [] : stacks });
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <span>Stack</span>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {filters.stack.length ? filters.stack.join(', ') : 'All'}
                  </span>
                </button>
                {filters.stack.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg z-10"
                  >
                    <div className="p-2">
                      {stacks.map(stack => (
                        <button
                          key={stack}
                          onClick={() => {
                            const stackFilters = [...filters.stack];
                            const index = stackFilters.indexOf(stack);
                            if (index > -1) {
                              stackFilters.splice(index, 1);
                            } else {
                              stackFilters.push(stack);
                            }
                            setFilters({ ...filters, stack: stackFilters });
                          }}
                          className="w-full flex items-center justify-between px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                        >
                          {stack}
                          <span className="text-gray-500 dark:text-gray-400">
                            {filters.stack.includes(stack) ? '✓' : ''}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            <div className="flex-1">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <button
                  className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all"
                  onClick={() => {
                    const outcomeFilters = filters.outcome;
                    setFilters({ ...filters, outcome: outcomeFilters.length ? [] : outcomes });
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <span>Outcome</span>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {filters.outcome.length ? filters.outcome.join(', ') : 'All'}
                  </span>
                </button>
                {filters.outcome.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg z-10"
                  >
                    <div className="p-2">
                      {outcomes.map(outcome => (
                        <button
                          key={outcome}
                          onClick={() => {
                            const outcomeFilters = [...filters.outcome];
                            const index = outcomeFilters.indexOf(outcome);
                            if (index > -1) {
                              outcomeFilters.splice(index, 1);
                            } else {
                              outcomeFilters.push(outcome);
                            }
                            setFilters({ ...filters, outcome: outcomeFilters });
                          }}
                          className="w-full flex items-center justify-between px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                        >
                          {outcome}
                          <span className="text-gray-500 dark:text-gray-400">
                            {filters.outcome.includes(outcome) ? '✓' : ''}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                {/* Before/After Slider */}
                <div className="relative h-full">
                  <img
                    src={project.beforeImage}
                    alt={`${project.title} before`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <img
                    src={project.afterImage}
                    alt={`${project.title} after`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm">{project.industry}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 rounded-b-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all"
                onClick={() => {
                  // Open case study modal
                }}
              >
                <span className="flex items-center justify-between">
                  <span>How We Built It</span>
                  <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
