import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
const Brands = React.lazy(() => import('./Brands'));

const LazyBrands = () => {
  const { ref, inView } = useInView({
    rootMargin: '50px 0px',
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <Suspense fallback={<div style={{ minHeight: '40rem' }}></div>}>
      <div ref={ref} style={{ minHeight: '40rem' }}>
        {inView && <Brands />}
      </div>
    </Suspense>
  );
};

export default LazyBrands;
