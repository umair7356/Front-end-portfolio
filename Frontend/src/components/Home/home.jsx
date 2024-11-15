import React from 'react';
import Navbar from '../Navbar.jsx';
import Banner from '../banner.jsx';
import About from '../About.jsx';
import Project from '../Project.jsx';
import Services from '../Services.jsx';
import Latest_news from '../Latest_news.jsx';
import Contact from "../Contact.jsx";
import BottomNav from '../BottomNav.jsx';

function home() {
  return (
    <>
     <div>
        <Navbar/>
        <Banner/>
        <About/>
        <Project />
        <Services/>
        <Latest_news/>
        <Contact/>
        <BottomNav/>
        </div> 
    </>
  )
}

export default home
