import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Contact from './Components/contact';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <ChakraProvider>

    <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
    </ChakraProvider>
  )
}

export default App;
