import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
const Reviews = React.lazy(() => import('./Reviews'));

const LazyReviews = () => {
  const { ref, inView } = useInView({
    rootMargin: '50px 0px',
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <Suspense fallback={<div style={{ minHeight: '70rem', backgroundColor: '#ffffff' }}></div>}>
      <div ref={ref} style={{ minHeight: '70rem', backgroundColor: '#ffffff' }}>
        {inView && <Reviews />}
      </div>
    </Suspense>
  );
};

export default LazyReviews;
