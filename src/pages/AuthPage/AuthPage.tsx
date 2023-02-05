import React from 'react'
import { AuthForm } from '../../components/AuthForm/AuthForm'
import styles from './AuthPage.module.scss'


export function AuthPage() {
    return (
        <div className={styles.AuthPage}>
            <AuthForm/>
        </div>
   )
}