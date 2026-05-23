import React from 'react';

interface TestCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl?: string;
}

export function TestCard({ quote, name, title, imageUrl }: TestCardProps) {
  return (
    <div className="card" style={{ padding: '32px' }}>
      <p style={{ fontSize: '18px', fontStyle: 'normal' }}>
        &quot;{quote}&quot;
      </p>
      <footer className="mt-16">
        <div className="av" style={{ backgroundImage: imageUrl ? `url('${imageUrl}')` : undefined }}></div>
        <div>
          <div className="nm">{name}</div>
          <div className="tt">{title}</div>
        </div>
      </footer>
    </div>
  );
}
