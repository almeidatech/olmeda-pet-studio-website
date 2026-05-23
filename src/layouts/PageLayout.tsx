import React from 'react';
import Navbar from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  navActive?: string; // e.g., 'home', 'services', 'blog'
}

export function PageLayout({ children, navActive }: PageLayoutProps) {
  return (
    <>
      <Navbar active={navActive} />
      {children}
      <Footer />
    </>
  );
}
