import Navbar from "./components/navbar/nav";
import Intro from "./components/intro/intro";
import './App.css';
import Services from "./components/services/services";
import Experience from "./components/Experience/experience";
import Work from "./components/work/work";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { themeContext } from "./context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="App" style={{background: darkMode? "black": "", color: darkMode? "white": ""}}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
