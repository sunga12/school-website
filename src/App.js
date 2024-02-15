import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navigation from './components/Navigation';
import News from './components/News';
import StuLife from './components/StuLife';

function App() {
  return (
    <div>
      <Home />
      <About />
      <News />
      <Gallery />
      <StuLife />
      <Contact />
    </div>
  );
}

export default App;
