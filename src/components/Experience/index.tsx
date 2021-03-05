import styles from './Experience.module.css';
import { Project } from "../Project";
import { LinkButton } from '../LinkButton';

export function Experience({ experience }) {
    return (
        <div className={styles.experience}>
            <h5>{experience.title}</h5>
            <p>
                <em>{experience.organizationPrefix}</em> <h6>{experience.organization}</h6>
                <span>{experience.period}</span>
            </p>
            {experience.content &&
                <p className={styles.mt1}>
                    {experience.content}
                </p>
            }
            {experience.subItems?.map((project) => {
                return <Project project={project} />
            })}
            {experience.links &&
                <nav>
                    {experience.links.map((link) => {
                        return (<LinkButton
                            url={link.url}
                            text={link.text}
                            type={link.type}
                        />);
                    })}
                </nav>
            }
        </div >
    );
}