import { LinkButton } from '../LinkButton';

import styles from './Profile.module.css';

export function Profile({ profile }) {
    return (
        <div className={styles.container}>
            <img src="https://github.com/christiandueck.png" alt="Profile Picture" />

            <div className={styles.data}>
                <h1>{profile.name}</h1>
                <p>{profile.email}</p>
                <nav>
                    {profile.links?.map((link) => {
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