import styles from './LinkButton.module.css';

export function LinkButton({ type, text, url }) {
    return (
        <a href={url} className={styles.button} target="_blank">
            <img src={`./icons/${type}.svg`} alt="" />
            {text}
        </a>
    );
}