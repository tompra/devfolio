import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import CaseStudy from './components/CaseStudy';
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
        isCaseStudyOpen,
        toggleCaseStudy,
    } = useAppContext();

    const isDarkModeOn = `min-h-screen ${darkMode ? 'dark' : ''} ${
        darkMode ? 'bg-slate-800' : ''
    }`;

    return (
        <div className={isDarkModeOn}>
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
                toggleCaseStudy={toggleCaseStudy}
                animateVisibility={animateVisibility}
            />
            <Contact animateVisibility={animateVisibility} />
            <Footer animateVisibility={animateVisibility} />

            {isModalOpen && (
                <Modal toggleModal={toggleModal} modalContent={modalContent} />
            )}
            {isCaseStudyOpen && (
                <CaseStudy
                    toggleCaseStudy={toggleCaseStudy}
                    modalContent={modalContent}
                />
            )}
        </div>
    );
};
export default App;
