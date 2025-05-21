import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import About from '@/components/About';
import { ThemeSwitch } from '@/components/ThemeProvider';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen">
        <Navigation />
        <main className="flex-grow">
          {children}
          <About />
          <ContactForm />
        </main>
        <Footer />
      </div>
      <Toaster />
      <ThemeSwitch />
    </ThemeProvider>
  );
}
