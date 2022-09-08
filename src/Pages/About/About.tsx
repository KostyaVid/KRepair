import AboutTitle from '../../components/AboutTitle/AboutTitle';
import LazyBrands from '../../components/Brands/LazyBrands';
import Features from '../../components/Features/Features';
import HeightService from '../../components/HeightService/HeightService';
import LazyReviews from '../../components/Reviews/LazyReviews';
import Staff from '../../components/Staff/Staff';

const About = () => {
  return (
    <>
      <AboutTitle />
      <Staff />
      <Features />
      <HeightService />
      <LazyBrands />
      <LazyReviews />
    </>
  );
};

export default About;
