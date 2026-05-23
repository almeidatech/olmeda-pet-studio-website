import React from 'react';

interface MetricCardProps {
  number: string;
  label: string | React.ReactNode;
  color?: string;
  align?: 'left' | 'center';
}

export function MetricCard({ number, label, color = 'var(--blue)', align = 'left' }: MetricCardProps) {
  const style: React.CSSProperties = align === 'center' ? { textAlign: 'center' } : {};

  return (
    <div style={style}>
      <div style={{ fontSize: '32px', fontWeight: 800, color, lineHeight: 1 }}>
        {number}
      </div>
      <div className="t-small mt-8">{label}</div>
    </div>
  );
}
