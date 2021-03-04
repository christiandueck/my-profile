import { useContext, useState } from 'react';
import { LanguagesContext, LanguagesProvider } from '../../contexts/LanguagesContext';
import styles from './LanguageSelector.module.css';

export function LanguageSelector() {
    const { activeLanguage } = useContext(LanguagesContext);

    const [language, setLanguage] = useState('en');
    const [isLanguageMenuVisible, setIsLanguageMenuVisible] = useState(false);

    function changeLanguage(language: string) {
        setLanguage(language);

        if (window.innerWidth <= 720) {
            setIsLanguageMenuVisible(!isLanguageMenuVisible);
        } else {
            setIsLanguageMenuVisible(false);
        }
    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.container}>

                <h4>Fluent in:</h4>

                <nav>
                    <a
                        className={language == 'en' ? styles.active : styles.empty}
                        onClick={() => changeLanguage('en')}
                    >english</a>

                    <a
                        className={language == 'de' ? styles.active : styles.empty}
                        onClick={() => changeLanguage('de')}
                    >german</a>

                    <a
                        className={language == 'pt' ? styles.active : styles.empty}
                        onClick={() => changeLanguage('pt')}
                    >portuguese</a>
                </nav>

                <span>
                    choose content language
                </span>
            </div>

            <div
                className={`${styles.languageMobileMenu} ${isLanguageMenuVisible && styles.visible}`}
            >
                <nav>
                    <a
                        className={language == 'en' ? styles.active : styles.empty}
                        onClick={() => changeLanguage('en')}
                    >english</a>

                    <a
                        className={language == 'de' ? styles.active : styles.empty}
                        onClick={() => changeLanguage('de')}
                    >german</a>

                    <a
                        className={language == 'pt' ? styles.active : styles.empty}
                        onClick={() => changeLanguage('pt')}
                    >portuguese</a>
                </nav>
            </div>
        </div>
    );
}