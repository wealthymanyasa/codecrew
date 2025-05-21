
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-16 border-t border-gray-200 dark:border-white/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-lg text-foreground">CodeCrew</span>
            </div>
            <p className="text-foreground/70 dark:text-foreground/70 mb-6">
              Next-gen software engineering for startups, enterprises, and the public sector.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/wealthymanyasa" className="text-foreground/60 hover:text-purple-500 dark:hover:text-purple-400 transition-colors" target='_blank'>
                <Github className="h-5 w-5" />
              </a>
              <a href="https://x.com/ManyasaObert" className="text-foreground/60 hover:text-purple-500 dark:hover:text-purple-400 transition-colors" target='_blank'>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/obertmanyasa/" className="text-foreground/60 hover:text-purple-500 dark:hover:text-purple-400 transition-colors" target='_blank'>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4 dark:text-purple-500">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-codecrew-purple dark:hover:text-codecrew-purple transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-codecrew-purple dark:hover:text-codecrew-purple transition-colors">Mobile Apps</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-codecrew-purple dark:hover:text-codecrew-purple transition-colors">API Integration</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-codecrew-purple dark:hover:text-codecrew-purple transition-colors">DevOps & CI/CD</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-codecrew-purple dark:hover:text-codecrew-purple transition-colors">AI & Machine Learning</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4 dark:text-purple-500">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-codecrew-purple transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-codecrew-purple transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-codecrew-purple transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-codecrew-purple transition-colors">Open Source</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-codecrew-purple transition-colors">Contact</a>
              </li>
            </ul>
            <div className="flex gap-6 mt-4 mb-10 md:mt-0">
              <a href="#" className="text-foreground/60 hover:text-foreground dark:hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground dark:hover:text-foreground transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground dark:hover:text-foreground transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4 dark:text-purple-500" >Subscribe</h4>
            <p className="text-foreground/70 mb-4">
              Get the latest news and updates from our team.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-purple-200 rounded px-4 py-2 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <Button className="bg-purple-500 hover:bg-purple-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 mt-8 md:mt-0 md:col-span-2 lg:col-span-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 dark:text-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} CodeCrew. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-foreground/60">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
