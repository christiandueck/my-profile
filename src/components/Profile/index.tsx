import Link from 'next/link'
import { useContext } from 'react';
import { LinkButton } from '../LinkButton';

import styles from './Profile.module.css';

export function Profile({ name, email, links }) {
    return (
        <div className={styles.container}>
            <img src="https://github.com/christiandueck.png" alt="Profile Picture" />

            <div className={styles.data}>
                <h1>Christian Dueck</h1>
                <p>christian@dueck.com.br</p>
                <nav>
                    {links?.map((link) => {
                        return (<LinkButton
                            url={link.url}
                            text={link.text}
                            type={link.type}
                        />);
                    })}
                </nav>
            </div>
        </div>
    );
}