import { useContext, useState } from 'react';
import { LanguagesContext, LanguagesProvider } from '../../contexts/LanguagesContext';
import styles from './LanguageSelector.module.css';

export function LanguageSelector({ languages }) {
    const { changeToen_US, changeTopt_BR, changeTode_DE } = useContext(LanguagesContext);

    const [language, setLanguage] = useState('en_US');
    const [isLanguageMenuVisible, setIsLanguageMenuVisible] = useState(false);

    function changeLanguage(language: string) {
        setLanguage(language);

        switch (language) {
            case 'pt_BR':
                changeTopt_BR();
                break;
            case 'de_DE':
                changeTode_DE();
                break;
            default:
                changeToen_US();
        }

        if (window.innerWidth <= 720) {
            setIsLanguageMenuVisible(!isLanguageMenuVisible);
        } else {
            setIsLanguageMenuVisible(false);
        }
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.container}>

                <nav>
                    {languages.items?.map((item) => {
                        return (
                            <a
                                className={language == item.code ? styles.active : styles.empty}
                                onClick={() => changeLanguage(item.code)}
                            >{item.translatedTitle}</a>
                        );
                    })}
                </nav>

                <span></span>
            </div>

            <div
                className={`${styles.languageMobileMenu} ${isLanguageMenuVisible && styles.visible}`}
            >
                <nav>
                    {languages.items?.map((item) => {
                        return (<a
                            className={language == item.code ? styles.active : styles.empty}
                            onClick={() => changeLanguage(item.code)}
                        >{item.translatedTitle}</a>);
                    })}
                </nav>
            </div>
        </div>
    );
}