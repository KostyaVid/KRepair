import React from 'react';
import LazyBrands from '../../components/Brands/LazyBrands';
import Features from '../../components/Features/Features';
import LazyReviews from '../../components/Reviews/LazyReviews';
import ServiceComp from '../../components/ServiceComp/ServiceComp';

const Service = () => {
  return (
    <>
      <ServiceComp />
      <Features />
      <LazyBrands />
      <LazyReviews />
    </>
  );
};

export default Service;
