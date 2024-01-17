import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

const App = () => {
    return (
        <div className='min-h-screen bg-emerald-600 px-10'>
            <Navbar />
            <Hero />
            <Skills />
        </div>
    );
};
export default App;
