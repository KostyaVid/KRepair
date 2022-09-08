import LazyBrands from '../../components/Brands/LazyBrands';
import Features from '../../components/Features/Features';
import Hero from '../../components/Hero/Hero';
import LazyReviews from '../../components/Reviews/LazyReviews';
import Services from '../../components/Services/Services';

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <LazyBrands />
      <LazyReviews />
    </div>
  );
}

export default Home;
