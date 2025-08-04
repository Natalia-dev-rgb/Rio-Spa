import { Route, Routes } from 'react-router-dom';
import { Gallery } from '../screens/Gallery';
import { Home } from '../screens/Home';
import { About } from '../screens/About';
import { ScrollToTop } from '../components/layout/ScrollToTop';
import { CookieBanner } from '../components/cookieBanner';

const Navigation = () => {
  return (
    <>
      <ScrollToTop />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default Navigation;