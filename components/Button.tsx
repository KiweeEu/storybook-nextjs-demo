import React from 'react';
import styles from '../styles/Button.module.scss'

type Props = {
    mode?: 'primary' | 'secondary' | 'success';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    label: string;
}

export const Button = ({ mode = 'primary', size = 'medium', onClick, label }: Props) => {
    const modeClass = `button--${mode}`;
    return (
        <button
            type="button"
            className={`${styles.button} ${styles[modeClass]} ${styles[`button--${size}`]}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
