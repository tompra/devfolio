import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div
            className={`min-h-screen ${darkMode ? 'dark' : ''} ${
                darkMode ? 'bg-slate-800' : ''
            }`}
        >
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};
export default App;
