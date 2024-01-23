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
    const [isOpen, setIsOpen] = useState(false);

    const animateVisibility = (inView, animationClass) => {
        return inView ? animationClass : '';
    };

    const handleClickOnItem = () => {
        setIsOpen(false);
    };

    const toggleModal = (content) => {
        setModalContent(content);
        setModalOpen(!isModalOpen);
    };

    return (
        <div
            className={`min-h-screen ${darkMode ? 'dark' : ''} ${
                darkMode ? 'bg-slate-800' : ''
            }`}
        >
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleClickOnItem={handleClickOnItem}
            />
            <Home isOpen={isOpen} />
            <About />
            <Skills animateVisibility={animateVisibility} />
            <Projects
                toggleModal={toggleModal}
                animateVisibility={animateVisibility}
            />
            <Contact animateVisibility={animateVisibility} />
            <Footer animateVisibility={animateVisibility} />

            {isModalOpen && (
                <Modal toggleModal={toggleModal} content={modalContent} />
            )}
        </div>
    );
};
export default App;
