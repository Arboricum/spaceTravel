import './App.css';
import { useEffect } from 'react';
import Header from './components/header/Header';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function BackgroundHandler() {
  const location = useLocation();
  
  useEffect(() => {
    let bgImageDesk;
    let bgImageTab;
    let bgImageMob;
    switch (location.pathname) {
      case '/':
        bgImageDesk = "url('/assets/home/background-home-desktop.jpg')";
        bgImageTab = "url('/assets/home/background-home-tablet.jpg')";
        bgImageMob = "url('/assets/home/background-home-mobile.jpg')";
        break;
      case '/destination':
        bgImageDesk = "url('/assets/destination/background-destination-desktop.jpg')";
        bgImageTab = "url('/assets/destination/background-destination-tablet.jpg')";
        bgImageMob = "url('/assets/destination/background-destination-mobile.jpg')";
        break;
      case '/crew':
        bgImageDesk = "url('/assets/crew/background-crew-desktop.jpg')";
        bgImageTab = "url('/assets/crew/background-crew-tablet.jpg')";
        bgImageMob = "url('/assets/crew/background-crew-mobile.jpg')";
        break;
      case '/technology':
        bgImageDesk = "url('/assets/technology/background-technology-desktop.jpg')";
        bgImageTab = "url('/assets/technology/background-technology-tablet.jpg')";
        bgImageMob = "url('/assets/technology/background-technology-mobile.jpg')";
        break;
      default:
        bgImageDesk = "none";
        bgImageTab = "none";
        bgImageMob = "none";
    }
    document.body.style.setProperty('--bg-image-desk', bgImageDesk);
    document.body.style.setProperty('--bg-image-tab', bgImageTab);
    document.body.style.setProperty('--bg-image-mob', bgImageMob);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
    <BackgroundHandler />
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/crew' element={<Crew/>} />
        <Route path='/technology' element={<Technology/>} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
