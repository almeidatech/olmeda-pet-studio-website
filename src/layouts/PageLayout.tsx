import React from 'react';
import { Footer } from '@/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <header id="site-header"></header>
      {children}
      <Footer />
    </>
  );
}
