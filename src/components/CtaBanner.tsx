import Link from 'next/link';

export default function CtaBanner() {
  return (
    <div className="cta-banner">
      <div className="cta-img" aria-hidden="true"></div>
      <div>
        <h2>Ready to Get More Patients &amp; Bookings?</h2>
        <p>Let's build your growth engine. Starting with a free, no-obligation audit.</p>
        <Link href="/resources/free-audit" className="btn primary">
          <span>Book Your Free Growth Audit</span>
          <span className="arrow">→</span>
        </Link>
      </div>
      <div className="cta-check">
        <div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          No obligation
        </div>
        <div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Custom growth plan
        </div>
        <div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Clear opportunities
        </div>
        <div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          ROI estimate
        </div>
      </div>
    </div>
  );
}
