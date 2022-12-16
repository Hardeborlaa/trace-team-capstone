import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Shop from './components/Shop';
// import Footer from './components/Footer';
import Cart from "./pages/Cart";
import About from "./pages/About";
import Navbar from './components/Navbar';
import Store from "./pages/Store";
import Home from './pages/Home';
// import Sectionone from './components/Sectionone';
// import Sectiontwo from './components/Sectiontwo';
// import Sectiontwoo from './components/Sectiontwoo';
// import Sectionthree from './components/Sectionthree';
// import Sectionfour from './components/Sectionfour';
// import Sectionfourr from './components/Sectionfourr';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Sectionone />
//       <Sectiontwo />
//       <Sectiontwoo />
//       <Sectionthree />
//       <Sectionfourr />
//       <Sectionfour />
//       <Shop/>
//       <Footer/>
//     </div>
//   );


  function App() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
          {/* <Route path="/" element={<Store />} /> */}
          <Route path="/" element={<Store />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
          {/* <Sectionone />
          <Sectiontwo />
          <Sectiontwoo />
          <Sectionthree />
          <Sectionfourr />
          <Sectionfour />
          <Shop/>
          <Footer/> */}
        </BrowserRouter>
      </>
    );
  }

export default App;
