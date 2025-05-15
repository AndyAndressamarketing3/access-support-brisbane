
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityTools from './AccessibilityTools';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <AccessibilityTools />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
