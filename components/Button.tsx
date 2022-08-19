import React from 'react';
import styles from '../styles/Button.module.scss'

type Props = {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    label: string;
}

// TODO add withArrow property
/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = true, size = 'medium', onClick, label }: Props) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <button
            type="button"
            className={`${styles.button} ${styles[mode]} ${styles[`button--${size}`]}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
