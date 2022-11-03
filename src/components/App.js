import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';

import Footer from './Footer';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
