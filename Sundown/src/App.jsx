import React, { useEffect } from 'react'
import Home from './components/Home/Home'
import './App.css'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import the styles

const App = () => {

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('#main-container'),
  //     smooth: true,
  //     // Add other options as needed
  //   });
  // }, []); // Empty dependency array ensures useEffect runs after mount  

  return (
    <>
      <div id='main-container'>
        <Home></Home>
      </div>
    </>
  )
}

export default App