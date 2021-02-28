import { ReactNode } from 'react';
import styles from './Experience.module.css';

interface ExperienceProps {
    children: ReactNode;
}

export function Experience({ children }: ExperienceProps) {
    return (
        <div className={styles.experience}>
            {children}
        </div>
    );
}