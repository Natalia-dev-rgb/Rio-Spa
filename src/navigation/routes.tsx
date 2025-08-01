import { Route, Routes } from 'react-router-dom';
import { Gallery } from '../screens/Gallery';
import { Home } from '../screens/Home';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default Navigation;