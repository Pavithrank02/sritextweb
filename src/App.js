import { Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import AboutUs from './view/AboutUs';
import Contact from './view/Contact';
import Product from './view/Product';
import Gallery from './view/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import "./global.css"
import Order from './components/Order';

function App() {
  return (
    <div className="scrollbar-hide">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/order' element={<Order />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
