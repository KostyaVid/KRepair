import { useLocation } from 'react-router-dom';
import MapFooter from './MapFooter/MapFooter';
import Question from './Question/Question';
import SubFooter from './SubFooter/SubFooter';

const Footer = () => {
  const location = useLocation();
  return (
    <footer>
      {location.pathname === '/404' || <Question />}
      {location.pathname === '/404' || location.pathname === '/contacts' || <MapFooter />}
      <SubFooter />
    </footer>
  );
};

export default Footer;
