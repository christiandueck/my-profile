import { ReactNode } from 'react';
import styles from './Project.module.css';

export function Project({ title, subTitle, text, link }) {
    return (
        <div className={styles.container}>
            <h6>{title}<span>{subTitle}</span></h6>
            <p>
                {text}
            </p>
            <div className={styles.buttons}>
                {link.map((link) => {
                    return (
                        <a href={link.url} className={styles.button} target="_blank">
                            <img src={`./icons/${link.type}.svg`} alt="" />
                            {link.text}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}