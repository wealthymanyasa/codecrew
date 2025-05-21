
import React, { useRef, useState, useEffect } from 'react';
import type { HTMLAttributes } from 'react';
import { useInViewport } from '@/lib/animations';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { motion } from 'framer-motion';
import { Code, GitBranch, GitCommit, GitMerge, GitPullRequest } from 'lucide-react';

// Mock data for the commit activity
const commitData = [
  { day: 'Mon', count: 12 },
  { day: 'Tue', count: 18 },
  { day: 'Wed', count: 28 },
  { day: 'Thu', count: 22 },
  { day: 'Fri', count: 30 },
  { day: 'Sat', count: 8 },
  { day: 'Sun', count: 5 },
];

// Mock data for scatter plot
const commitScatterData = [
  { dayIndex: 1, commitTime: 10 },
  { dayIndex: 2, commitTime: 15 },
  { dayIndex: 3, commitTime: 20 },
  { dayIndex: 4, commitTime: 12 },
  { dayIndex: 5, commitTime: 18 },
  { dayIndex: 6, commitTime: 8 },
  { dayIndex: 7, commitTime: 6 },
  { dayIndex: 1, commitTime: 12 },
  { dayIndex: 2, commitTime: 18 },
  { dayIndex: 3, commitTime: 22 },
  { dayIndex: 4, commitTime: 14 },
  { dayIndex: 5, commitTime: 20 },
  { dayIndex: 6, commitTime: 10 },
  { dayIndex: 7, commitTime: 8 }
];

// Mock code snippet
const codeSnippet = `// Smart component with React hooks
import { useState, useEffect } from 'react';

export function useDataFetching(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}`;

const EngineeringDashboard = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInViewport(sectionRef);
  const [gitActivity, setGitActivity] = useState({
    commits: 0,
    branches: 0,
    prs: 0,
    merges: 0,
  });
  const [buildStatus, setBuildStatus] = useState('success');
  const [deploymentStatus, setDeploymentStatus] = useState('deploying');

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setGitActivity(prev => ({
        commits: prev.commits + Math.floor(Math.random() * 5),
        branches: prev.branches + Math.floor(Math.random() * 2),
        prs: prev.prs + Math.floor(Math.random() * 3),
        merges: prev.merges + Math.floor(Math.random() * 2),
      }));
      
      // Randomly change build status
      const statuses = ['success', 'warning', 'error'];
      setBuildStatus(statuses[Math.floor(Math.random() * statuses.length)]);
      
      // Randomly change deployment status
      const deploymentStatuses = ['deploying', 'success', 'failed'];
      setDeploymentStatus(deploymentStatuses[Math.floor(Math.random() * deploymentStatuses.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900 px-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <p 
            className={`text-blue-500 font-medium mb-3 transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            REAL-TIME DEVELOPMENT
          </p>
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 dark:text-white transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Real-Time <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Development Dashboard</span>
          </h2>
          <p 
            className={`text-foreground/70 max-w-2xl mx-auto transition-all duration-500 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Get a glimpse into our development process and see our team's activity in real-time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Development Activity */}
          <div 
            className={`p-6 lg:col-span-2 overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {/* Git Activity Stats */}
              <motion.div 
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <GitCommit className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-medium">Commits</span>
                </div>
                <div className="text-2xl font-bold text-purple-500 dark:text-purple-400 text-center">{gitActivity.commits}</div>
              </motion.div>
              <motion.div 
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">Branches</span>
                </div>
                <div className="text-2xl font-bold text-blue-500 dark:text-blue-400 text-center">{gitActivity.branches}</div>
              </motion.div>
              <motion.div 
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <GitPullRequest className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-medium">PRs</span>
                </div>
                <div className="text-2xl font-bold text-purple-500 dark:text-purple-400 text-center">{gitActivity.prs}</div>
              </motion.div>
              <motion.div 
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <GitMerge className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-medium">Merges</span>
                </div>
                <div className="text-2xl font-bold text-blue-500 dark:text-blue-400 text-center">{gitActivity.merges}</div>
              </motion.div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4  dark:text-white">Build Status</h3>
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${
                  buildStatus === 'success' ? 'bg-green-500' :
                  buildStatus === 'warning' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`} />
                <div className="text-blue-500 dark:text-blue-400 font-medium">{buildStatus.charAt(0).toUpperCase() + buildStatus.slice(1)}</div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium mb-4  dark:text-white">Deployment Status</h3>
              <div className="flex items-center gap-4">
                <div className={`w-3 h-3 rounded-full ${
                  deploymentStatus === 'success' ? 'bg-green-500' :
                  deploymentStatus === 'failed' ? 'bg-red-500' :
                  'bg-yellow-500'
                }`} />
                <div className="text-blue-500 dark:text-blue-400 font-medium">{deploymentStatus.charAt(0).toUpperCase() + deploymentStatus.slice(1)}</div>
              </div>
            </div>
            
            <div className="bg-gray-100 dark:bg-gray-800/70 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-foreground/90 font-mono">
                <code className="dark:text-foreground/90">{codeSnippet}</code>
              </pre>
            </div>
            
          {/* Commit Activity Charts */}
          <div 
            className={`p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Commit Activity</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bar Chart */}
              <div className="bg-white dark:bg-gray-800/80 p-4 rounded-lg shadow-sm overflow-hidden">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={commitData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#6366f1" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-foreground/60">Weekly commits</span>
                  <div className="px-2 py-1 bg-purple-500/20 dark:bg-purple-500/30 rounded text-xs text-purple-600 dark:text-purple-300">
                    +24% vs last week
                  </div>
                </div>
              </div>

              {/* Scatter Plot */}
              <div className="bg-white dark:bg-dark/20 p-4 rounded-lg shadow-sm">
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="dayIndex" name="Day" />
                    <YAxis type="number" dataKey="commitTime" name="Commit Time" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter 
                      name="Commits" 
                      data={commitScatterData} 
                      fill="#6366f1" 
                      shape="circle"
                    />
                  </ScatterChart>
                </ResponsiveContainer>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-foreground/60">Commit distribution</span>
                  <div className="px-2 py-1 bg-blue-500/20 dark:bg-blue-500/30 rounded text-xs text-blue-600 dark:text-blue-300">
                    123 total commits
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Code Stream */}
          <div 
            className={`glass-card p-6 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <h3 className="text-lg font-medium mb-4 dark:text-white">Live Code Stream</h3>
            <div className="bg-gray-100 dark:bg-gray-800/70 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-foreground/90 font-mono">
                <code className="dark:text-foreground/90">{codeSnippet}</code>
              </pre>
            </div>
          </div>                <div className="w-6 h-6 rounded-full bg-purple/40 dark:bg-purple/20 flex items-center justify-center">
                  <span className="text-xs text-purple dark:text-purple">JS</span>
                </div>
                <span className="text-sm text-foreground/60">useDataFetching.js</span>
              </div>
              <span className="text-sm text-foreground/60">Updated 5 mins ago</span>
            </div>
          </div>
          
          {/* Live Developer Activity */}
          <div 
            className={`glass-card p-6 transition-all my-10  duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-lg font-medium mb-4 dark:text-white">Active Developers</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Developer 1 */}
              <div className="flex items-center p-3 bg-white/50 dark:bg-dark/20 rounded-lg border border-green-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-3 flex items-center justify-center">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div>
                  <p className="font-medium">John Smith</p>
                  <p className="text-xs text-foreground/60">14 commits today</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              
              {/* Developer 2 */}
              <div className="flex items-center p-3 bg-white/50 dark:bg-dark/20 rounded-lg  border border-blue-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3 flex items-center justify-center">
                  <span className="text-white font-bold">AK</span>
                </div>
                <div>
                  <p className="font-medium">Ava Kim</p>
                  <p className="text-xs text-foreground/60">9 commits today</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-blue-400"></div>
              </div>
              
              {/* Developer 3 */}
              <div className="flex items-center p-3 bg-white/50 dark:bg-dark/20 rounded-lg border border-yellow-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple to-blue mr-3 flex items-center justify-center">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <p className="font-medium">Marcus Jones</p>
                  <p className="text-xs text-foreground/60">7 commits today</p>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-yellow-400"></div>
              </div>
            </div>
          </div>
          
          {/* CI/CD Status */}
          <div 
            className={`glass-card p-6 lg:col-span-3 transition-all duration-700 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <h3 className="text-lg font-medium mb-4 dark:text-white">Deployment Status</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg p-4 border border-green-500/20">
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-green-300">Production</span>
                  <div className="px-2 py-1 bg-green-500/20 rounded text-xs text-green-400">
                    Healthy
                  </div>
                </div>
                <div className="mt-2 text-sm text-foreground/60">
                  Deployed 2 hours ago
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-xs text-foreground/60">v2.4.1</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg p-4 border border-blue-500/20">
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-blue-300">Staging</span>
                  <div className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-400">
                    Building
                  </div>
                </div>
                <div className="mt-2 text-sm text-foreground/60">
                  Started 5 minutes ago
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-xs text-foreground/60">v2.4.2</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-lg p-4 border border-yellow-500/20">
                <div className="flex justify-between items-center">
                  <span className="font-medium dark:text-yellow-300">Development</span>
                  <div className="px-2 py-1 bg-yellow-500/20 rounded text-xs text-yellow-400">
                    Testing
                  </div>
                </div>
                <div className="mt-2 text-sm text-foreground/60">
                  Running tests...
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <span className="text-xs text-foreground/60">PR #143</span>
                </div>
              </div>
            </div>
          </div>
     
    </section>
  );
};

export default EngineeringDashboard;

interface EngineeringDashboardProps extends HTMLAttributes<HTMLDivElement> {}

EngineeringDashboard.displayName = 'EngineeringDashboard';
