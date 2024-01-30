import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true');
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const animateVisibility = (inView, animationClass) => {
        return inView ? animationClass : '';
    };

    const handleClickOnItem = () => {
        setIsOpen(false);
    };

    const toggleModal = (content) => {
        setModalContent(content);
        setModalOpen((isModalOpen) => !isModalOpen);
    };

    const contextValues = {
        darkMode,
        setDarkMode,
        isModalOpen,
        setModalOpen,
        modalContent,
        setModalContent,
        isOpen,
        setIsOpen,
        animateVisibility,
        handleClickOnItem,
        toggleModal,
    };

    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
