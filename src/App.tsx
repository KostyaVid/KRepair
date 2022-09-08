import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { YMaps } from 'react-yandex-maps';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import './App.scss';
import Service from './Pages/Service/Service';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Props from './Pages/Props/Props';
import Price from './Pages/Price/Price';
import Audio from './Pages/Audio/Audio';

function App() {
  return (
    <BrowserRouter>
      <YMaps>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/404" element={<NotFound />} />
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/about" element={<About />} />
              <Route path="/price" element={<Price />} />
              <Route path="/audio" element={<Audio />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/contacts/props" element={<Props />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </YMaps>
    </BrowserRouter>
  );
}

export default App;
