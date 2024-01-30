import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useAppContext } from './context/context';

const App = () => {
    const {
        darkMode,
        setDarkMode,
        isModalOpen,
        modalContent,
        isOpen,
        setIsOpen,
        animateVisibility,
        handleClickOnItem,
        toggleModal,
    } = useAppContext();

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
                <Modal toggleModal={toggleModal} modalContent={modalContent} />
            )}
        </div>
    );
};
export default App;
