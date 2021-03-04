import styles from './Position.module.css';

export function Position({ title, skills }) {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>

            <nav>
                {skills?.map((skill) => {
                    return (
                        <a>
                            {skill.name}
                            <img src={`./icons/${skill.icon}`} alt={skill.name} />
                        </a>
                    );
                })}
            </nav>
        </div>
    );
}