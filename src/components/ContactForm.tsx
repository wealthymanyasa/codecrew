import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 dark:text-white">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ rotateY: 20 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-gray-800/50 dark:bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"
              >
                <Mail className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-gray-400 dark:text-white">developers@codecrew.dev</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ rotateY: 20 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-gray-800/50 dark:bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"
              >
                <Phone className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-400 dark:text-white">+(263) 779-050-634</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ rotateY: 20 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-gray-800/50 dark:bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg"
              >
                <MapPin className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-400 dark:text-white">Kenilworth Gardens, Newlands, Harare</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-400 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-400 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-400 transition-all min-h-[120px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center p-4 bg-green-900/50 dark:bg-green-200/50 rounded-lg text-green-400 dark:text-green-800"
              >
                Message sent successfully! We'll get back to you soon.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
