import Navbar from "./components/Navbar/Navbar";
import AboutMe from './components/AboutMe/AboutMe';
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Cotact";
import Footer from "./components/Footer/Footer";
import Opener from "./components/Opener/Opener";

const  App = ()=> {
  return (
    <main>
      <Opener/>
      <Navbar/>
      <AboutMe/>
      <div className="main-content">
      <Projects/>
      <Skills/>
      <Contact/>
    
      </div>
      <Footer/>
    </main>
  );
}

export default App;
