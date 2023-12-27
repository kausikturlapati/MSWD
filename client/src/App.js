import logo from './logo.svg';
import './App.css';
import Student from './Components/Student.js'
import Header from './Components/Nav.js';
import Parent from './Components/Parent.js'
import Contactus from './Components/Contactus.js'
import Footer from './Components/Footer.js'
import Visitor from './Components/Visitor.js';
import Counsollor from './Components/Counsollor.js';
import Login from './Components/Login.js';
import {  Route,Routes } from 'react-router-dom'; 
import Home from './Components/Home.js';
import Appointments from './Components/Appointments.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>  
    <Route path="/home" element={<Home/>} /> 
    <Route path="/Contactus" element={<Contactus/>} /> 
    <Route path="/Counsollor" element={<Counsollor/>} /> 
    <Route path="/Login" element={<Login/>} /> 
    <Route path="/Student" element={<Student/>} /> 
    <Route path="/Visitor" element={<Visitor/>} /> 
    <Route path="/Parent" element={<Parent/>} /> 
    <Route path="/Appointments" element={<Appointments/>} />
    </Routes>
    <Footer></Footer>
    </div>
  );
}

 


export default App;