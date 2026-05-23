import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  borderTop?: string;
  style?: React.CSSProperties;
}

export function Card({ children, className = '', padding = '32px', borderTop, style }: CardProps) {
  const borderStyle = borderTop ? { borderTop } : {};
  return (
    <div className={`card ${className}`} style={{ padding, ...borderStyle, ...style }}>
      {children}
    </div>
  );
}
