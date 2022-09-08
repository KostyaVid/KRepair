import React from 'react';
import AudioContent from '../../components/AudioContent/AudioContent';
import LazyBrands from '../../components/Brands/LazyBrands';
import Features from '../../components/Features/Features';
import LazyReviews from '../../components/Reviews/LazyReviews';

const Audio = () => {
  return (
    <>
      <AudioContent />
      <Features />
      <LazyBrands />
      <LazyReviews />
    </>
  );
};

export default Audio;
