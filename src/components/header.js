import styles from '../style/header.module.css';

const Header = () => {
    return ( 
        <div className={styles.header}>
            <div className={styles.title}><h1>ReactTest</h1></div>
            <div className={styles.auth}>
                <p className={styles.login}>Login</p>
                <p className={styles.signup}>Signup</p>

            </div>
        </div>
     );
}
 
export default Header;