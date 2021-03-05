import { LinkButton } from '../LinkButton';
import styles from './Project.module.css';

export function Project({ project }) {
    return (
        <div className={styles.container}>
            <h6>{project.title}<span>{project.subtitle}</span></h6>
            <p>
                {project.content}
            </p>
            <div className={styles.buttons}>
                {project.links?.map((link) => {
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