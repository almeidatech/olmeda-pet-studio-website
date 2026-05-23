import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <header id="site-header"></header>
      {children}
      <footer id="site-footer"></footer>
    </>
  );
}
