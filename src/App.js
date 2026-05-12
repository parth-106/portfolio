import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <div className='bg-[#0d1224]'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
