import Image from "next/image";

import  Header  from './components/Home/Hero' ;
import AboutUs from "./components/AboutUs/AboutUs";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import Contact from "./components/contact/Contact";
import './components/Footer/Footer.css'
import Navbar from "./components/header/Navbar";



export default function Home(): any  {
  return (
    <>


     <Navbar />
    <Header/>
    <AboutUs />
    <Project />
    <Contact />
    <Footer />
    
    
    
    </>
  );
}
