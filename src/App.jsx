import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useState } from 'react';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const toggleModal = (content) => {
        console.log('modal is clicked');
        console.log('content', content);
        setModalContent(content);
        setModalOpen(!isModalOpen);
    };

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
            <Projects toggleModal={toggleModal} />
            <Contact />
            <Footer />

            {isModalOpen && (
                <Modal toggleModal={toggleModal} content={modalContent} />
            )}
        </div>
    );
};
export default App;
