import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
    return (
        <div className='min-h-screen bg-emerald-600 px-10'>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
        </div>
    );
};
export default App;
