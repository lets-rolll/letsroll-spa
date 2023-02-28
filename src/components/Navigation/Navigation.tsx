import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

export function Navigation() {
   return (
       <nav className={styles.Navigation}>
           <span className={styles.LinkRow}>
               <Link to='/map'>Map</Link>
               <Link to='/sign-up'>Регистрация/Вход</Link>
               <Link to='/contactform'>Техподдержка</Link>
               <Link to='/blog'>Блог</Link>
               <Link to='/profile'>Личный кабинет</Link>
           </span>
       </nav>
   )
}