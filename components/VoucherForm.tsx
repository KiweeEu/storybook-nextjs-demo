import React, { useState } from 'react';
import { Button } from './Button';
import styles from '../styles/VoucherForm.module.scss';

type Props = {
    voucher?: string;
}

export const VoucherForm = ({ voucher = '' }: Props) => {
    const [voucherStatus, setVoucherStatus] = useState<'init' | 'success' | 'errpr'>('init');

    const showSuccessMessage = () => {
        setVoucherStatus('success');
    }

    const buttonLabel = (): string => {
        if (voucherStatus === 'success') {
            return 'Voucher applied!'
        }
        return 'Apply voucher';
    }

    const buttonMode = () => {
        if (voucherStatus === 'success') {
            return 'success';
        }
        return 'primary';
    }

    return (
        <form className={styles.form}>
            <label>
                Enter voucher code:
                <input type="text" name="voucher" data-testid="voucher" className={styles.emailInput} />
            </label>
            <Button mode={buttonMode()} label={buttonLabel()} onClick={showSuccessMessage}/>
        </form>
    );
};
