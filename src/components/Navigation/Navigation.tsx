import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

export function Navigation() {
   return (
       <nav className={styles.Navigation}>
           <span className={styles.LinkRow}>
               <Link to='/map'>Map</Link>
               <Link to='/auth'>Auth</Link>
               <Link to='/contactform'>ContactForm</Link>
           </span>
       </nav>
   )
}