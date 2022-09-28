import React from 'react';
import Image from "next/image";

import { Button } from './Button';
import styles from '../styles/Header.module.scss'
import { User } from "../types/User";

type Props = {
    user?: User | null;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: Props) => (
    <header>
        <div className={styles.wrapper}>
            <div>
                <Image
                    src='/storybook.svg'
                    width="40px"
                    height="35px"
                />
                <h1>Storyshop</h1>
            </div>
            <div>
                {user ? (
                    <Button size="large" onClick={onLogout} label="Log out" />
                ) : (
                    <>
                        <Button size="large" onClick={onLogin} label="Log in" />
                        <Button primary size="large" onClick={onCreateAccount} label="Sign up" />
                    </>
                )}
            </div>
        </div>
    </header>
);
