import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Works from "./components/Works/Works";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
