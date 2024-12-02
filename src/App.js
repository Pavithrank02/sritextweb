import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './view/Home';
import AboutUs from './view/AboutUs';
import Contact from './view/Contact';
import Product from './view/Product';
import Gallery from './view/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/product' element={<Product />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
