import React from 'react'
import cn from 'classnames'
import styles from './Input.module.scss'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: string
    label?: string
    value?: string
    // errorMessage?: string
}

// const isInvalid = (props: InputProps): boolean => {
//     return true;
// }

export function Input({type, label, value, ...attrs}: InputProps) {
    let classNames = cn(styles.Input)
    const htmlFor = `${type}-${Math.random()}`


    // if() {
    //    classNames += ` ${styles.invalid}` 
    // }

    return (
       <div className={classNames}>
        <label htmlFor={htmlFor}>{label}</label>
        <input
            type={type || 'text'}
            value={value}
            id = {htmlFor}
            {...attrs}
        />
        {/* <span>{errorMessage}</span> */}
       </div>
    )
}