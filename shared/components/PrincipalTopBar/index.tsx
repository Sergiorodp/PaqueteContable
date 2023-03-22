//styles
import styles from './PrincipalTopBar.module.css'

export default function TopBar(){
    return(
        <div className={ styles.TopContainer} >  
            <div>
                Info
            </div>
            <div>
                Serach
            </div>
            <div>
                profile
            </div>
        </div>
        
    )
}