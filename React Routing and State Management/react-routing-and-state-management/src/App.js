import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Employee from './Employee/Employee';
import SingleEmployee from './SingleEmployee/SingleEmployee';
import Error from './Error/Error';
import NavScrollExample from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavScrollExample/>
        <Routes>

          <Route path="/" element = {<Home/>}/>

          <Route path="/home" element={<Home/>}/>

          <Route path="/employee" element = {<Employee/>}/>
          <Route path="/employee/:id" element = {<SingleEmployee/>}/>

          {/* <Route path="/details" element ={<SingleEmployee/>}/> */}

          <Route path="*" element={<Error/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
