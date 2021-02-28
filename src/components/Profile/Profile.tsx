import styles from './Profile.module.css';

export function Profile() {
    return (
        <div className={styles.container}>
            <img src="https://github.com/christiandueck.png" alt="Profile Picture" />

            <div className={styles.data}>
                <h1>Christian Dueck</h1>
                <p>christian@dueck.com.br</p>
                <nav>
                    <a>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0.247498C4.475 0.247498 0 4.725 0 10.2475C0 14.6667 2.865 18.4142 6.8375 19.735C7.3375 19.8292 7.52083 19.52 7.52083 19.2542C7.52083 19.0167 7.5125 18.3875 7.50833 17.5542C4.72667 18.1575 4.14 16.2125 4.14 16.2125C3.685 15.0583 3.0275 14.75 3.0275 14.75C2.12167 14.13 3.0975 14.1425 3.0975 14.1425C4.10167 14.2125 4.62917 15.1725 4.62917 15.1725C5.52083 16.7017 6.97 16.26 7.54167 16.0042C7.63167 15.3575 7.88917 14.9167 8.175 14.6667C5.95417 14.4167 3.62 13.5567 3.62 9.725C3.62 8.63333 4.0075 7.74166 4.64917 7.04166C4.53667 6.78916 4.19917 5.7725 4.73667 4.395C4.73667 4.395 5.57417 4.12666 7.48667 5.42C8.28667 5.1975 9.13667 5.0875 9.98667 5.0825C10.8367 5.0875 11.6867 5.1975 12.4867 5.42C14.3867 4.12666 15.2242 4.395 15.2242 4.395C15.7617 5.7725 15.4242 6.78916 15.3242 7.04166C15.9617 7.74166 16.3492 8.63333 16.3492 9.725C16.3492 13.5667 14.0117 14.4125 11.7867 14.6583C12.1367 14.9583 12.4617 15.5717 12.4617 16.5083C12.4617 17.8467 12.4492 18.9217 12.4492 19.2467C12.4492 19.5092 12.6242 19.8217 13.1367 19.7217C17.1375 18.41 20 14.66 20 10.2475C20 4.725 15.5225 0.247498 10 0.247498Z" fill="#C5C6C8" />
                        </svg>
                        GitHub
                    </a>

                    <a>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0392 17.0433H14.0775V12.4025C14.0775 11.2958 14.055 9.87167 12.5342 9.87167C10.99 9.87167 10.7542 11.0758 10.7542 12.3208V17.0433H7.7925V7.5H10.6375V8.80083H10.6758C11.0733 8.05083 12.04 7.25917 13.4842 7.25917C16.485 7.25917 17.04 9.23417 17.04 11.805V17.0433H17.0392ZM4.4475 6.19417C3.49417 6.19417 2.72833 5.4225 2.72833 4.47333C2.72833 3.525 3.495 2.75417 4.4475 2.75417C5.3975 2.75417 6.1675 3.525 6.1675 4.47333C6.1675 5.4225 5.39667 6.19417 4.4475 6.19417ZM5.9325 17.0433H2.9625V7.5H5.9325V17.0433ZM18.5208 0H1.47583C0.66 0 0 0.645 0 1.44083V18.5592C0 19.3558 0.66 20 1.47583 20H18.5183C19.3333 20 20 19.3558 20 18.5592V1.44083C20 0.645 19.3333 0 18.5183 0H18.5208Z" fill="#C5C6C8" />
                        </svg>
                        LinkedIn
                    </a>
                </nav>
            </div>
        </div>
    );
}