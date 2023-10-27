import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeComponent from "./components/HomeComponent";
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomeComponent />} />
          <Route path="/o-nama" element={<AboutComponent />} />
          <Route path="/blog" element={<HomeComponent />} />
          <Route path="/projects" element={<HomeComponent />} />
          <Route path="/kontakt" element={<ContactComponent />} />
        </Routes>
        <Footer />
		  </BrowserRouter>
    </>
  );
}

export default App;
