import styles from './LanguageSelector.module.css';

export function LanguageSelector() {
    return (
        <div className={styles.container}>

            <h4>Fluent in:</h4>

            <nav>
                <a className={styles.active}>english</a>

                <a>german</a>

                <a>portuguese</a>
            </nav>

            <span>
                choose content language
            </span>

        </div>
    );
}