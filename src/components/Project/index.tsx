import { LinkButton } from '../LinkButton';
import styles from './Project.module.css';

export function Project({ title, subTitle, text, links }) {
    return (
        <div className={styles.container}>
            <h6>{title}<span>{subTitle}</span></h6>
            <p>
                {text}
            </p>
            <div className={styles.buttons}>
                {links.map((link) => {
                    return <LinkButton
                        url={link.url}
                        text={link.text}
                        type={link.type}
                    />;
                })}
            </div>
        </div>
    );
}