import styles from './ContentBlock.module.css';
import { Experience } from "../Experience";

export function ContentBlock({ content }) {
    return (
        <section className={styles.section}>
            <h4>{content.title}</h4>
            {content.content &&
                <p>
                    {content.content}
                </p>
            }
            {content.items?.map((item) => {
                return <Experience experience={item} />
            })}
        </section >
    );
}