import "./App.css";
import Home from "./pages/Home";


import SocialLinks from "./components/SocialLinks";
import Exprience from "./components/Exprience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar/>
      <Home />
      <About/>
      <Portfolio/>
      <Exprience />
      <Contact />
      
      <SocialLinks />
    </>
  );
}

export default App;
