import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Error from './components/Error/Error';
import Product from './components/Product/Product';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';


function App() {

  let isLogged = true;

  let data = {
    "user": "user is not logged in"
  }

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>

          <Route path="/home" element={<Home/>}/>
          {/* nested route start */}
            <Route path="/" element={<Home/>}>

              <Route path="about" element={<About/>}/>
              
            </Route>
          {/* nested route end */}

          <Route path="contact" element={<Contact/>}/>

          {/* dynamic product search */}
            <Route path="/product/:name" element={<Product/>}/>
            <Route path="/product/:name/:price" element={<Product/>}/>
            <Route path ="/dashboard" element={ isLogged ? <Dashboard/> : <Navigate to = "/login" replace state={data}/>}/>
            <Route path ="/login" element={<Login/>}/>
            <Route path ="/logout" element={<Logout/>}/>

            <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
