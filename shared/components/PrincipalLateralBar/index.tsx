// styles
import styles from './PrincipalLateralBar.module.css'

export default  function LateralBar(){
    return(
        <nav className={styles.LateralContainer}>
            <div className={styles.LateralOPtions}>
                <div>

                </div>
                <nav>
                    <p> el menu</p>
                </nav>
                <footer>
                    <p>Footer</p>
                </footer>
            </div>
        </nav>
    )
}