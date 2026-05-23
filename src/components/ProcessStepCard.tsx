import React from 'react';

interface ProcessStepCardProps {
  step: number;
  title: string;
  description: string;
  highlightColor?: string;
}

export function ProcessStepCard({ step, title, description, highlightColor = 'var(--blue)' }: ProcessStepCardProps) {
  const isHighlighted = step === 4 || highlightColor !== 'var(--blue)';
  const borderStyle = isHighlighted ? { borderTop: `3px solid ${highlightColor}` } : {};
  const stepBgColor = isHighlighted ? highlightColor : 'var(--blue)';

  return (
    <div className="card" style={{ padding: '32px', ...borderStyle }}>
      <div className="step-row" style={{ marginBottom: '18px' }}>
        <div className="step" style={{ background: stepBgColor }}>
          {String(step).padStart(2, '0')}
        </div>
        <div className="step-divider" style={isHighlighted ? { borderColor: highlightColor } : {}}></div>
      </div>
      <h3 style={{ fontSize: '17px' }}>{title}</h3>
      <p className="t-small mt-8">{description}</p>
    </div>
  );
}
