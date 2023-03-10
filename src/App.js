import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import News from './News';
// import Check from './Check';
// import MainBg from './MainBg';
import Footer from './Footer';
import Diagnosis from './Diagnosis';
import Prevention from './Prevention';
import Doctors from './Doctors';
import Applydoctor from './Applydoctor';
import Faq from './Faq';
import History from './History';
import DoctorBook from './DoctorBook';
// import ReactDOM from "react-dom";
//import Footer from './Footer';
import Register from './Register';
import SignIn from './SignIn';
import OneNews from './OneNews';

function App() {
  



  
  

  // console.log($("nav").offset().top);

  return (
    <>
    <Navbar></Navbar>
    {/* <Home></Home> */}
    <Routes>
      <Route path='home' element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='news' element={<News></News>}></Route>
      <Route path='oneNews' element={<OneNews></OneNews>}></Route>
      <Route path='faq' element={<Faq></Faq>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
      <Route path='history' element={<History></History>}></Route>
      <Route path='diagnosis' element={<Diagnosis></Diagnosis>}></Route>
      <Route path='prevention' element={<Prevention></Prevention>}></Route>
      <Route path='doctors' element={<Doctors></Doctors>}></Route>
      <Route path='register' element={<Register></Register>}></Route>
      <Route path='signIn' element={<SignIn></SignIn>}></Route>
      <Route path='applydoctor' element={<Applydoctor></Applydoctor>}></Route>
      <Route path='doctorBook' element={<DoctorBook></DoctorBook>}>
        <Route path=':id' element={<DoctorBook></DoctorBook>}></Route>
      </Route>
      <Route path='*' element={<Home></Home>}></Route>
      
    </Routes>
    <Footer></Footer>
    </>
    
  );
}
export default App;
