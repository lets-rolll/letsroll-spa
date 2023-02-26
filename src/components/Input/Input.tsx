import cn from 'classnames'
import styles from './Input.module.scss'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: string
    label?: string
    value?: string
    touched?: boolean | undefined
    errors?: string | undefined
}

export function Input({type, label, value, touched, errors, ...attrs}: InputProps) {
    let classNames = cn(styles.Input, {[styles.invalid] : errors && touched})

    const htmlFor = `${type}-${Math.random()}`

    return (
       <div className={classNames}>
        <label htmlFor={htmlFor}>{label}</label>
        <input
            type={type || 'text'}
            value={value}
            id = {htmlFor}
            {...attrs}
        />
        {touched && errors && <div className={styles.Error}>{errors}</div>}
       </div>
    )
}