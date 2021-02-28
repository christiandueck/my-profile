import styles from './Position.module.css';

export function Position() {
    return (
        <div className={styles.container}>
            <h3>Front-end developer</h3>

            <nav>
                <a>
                    HTML
                    <img src="./icons/html5.svg" alt="HTML5" />
                </a>
                <a>
                    CSS
                    <img src="./icons/css3.svg" alt="CSS3" />
                </a>
                <a>
                    Javascript
                    <img src="./icons/javascript.svg" alt="Javascript" />
                </a>
                <a>
                    React
                    <img src="./icons/react.svg" alt="React" />
                </a>
                <a>
                    Next.js
                    <img src="./icons/nextjs.svg" alt="Next.js" />
                </a>
                <a>
                    Git
                    <img src="./icons/git.svg" alt="Git" />
                </a>
            </nav>
        </div>
    );
}