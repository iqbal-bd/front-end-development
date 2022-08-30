import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Error from './components/Error/Error';
import Product from './components/Product/Product';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/product/:name" element={<Product/>}/>
            <Route path="/product/:name/:price" element={<Product/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
