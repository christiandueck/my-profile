import { ReactNode } from 'react';
import styles from './ContentBlock.module.css';

interface ContentBlockProps {
    children: ReactNode;
}

export function ContentBlock({ children }: ContentBlockProps) {
    return (
        <section className={styles.section}>
            {children}
        </section>
    );
}