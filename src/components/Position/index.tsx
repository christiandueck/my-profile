import styles from './Position.module.css';

export function Position({ position }) {
    return (
        <div className={styles.container}>
            <h3>{position.function}</h3>

            <nav>
                {position.skills?.map((skill) => {
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