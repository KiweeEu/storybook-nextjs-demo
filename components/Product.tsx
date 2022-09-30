import React from 'react';
import styles from '../styles/Product.module.scss'
import Image from 'next/image'

type Props = {
    name: string;
    shortDescription: string;
    price: number;
    discountPrice?: number;
    /**
     * Path of an image inside public folder on image URL
     */
    image: string;
    isBestseller?: boolean;
    isNew?: boolean;
}

export const Product = ({ name, shortDescription, price, image, isNew, isBestseller, discountPrice = undefined }: Props) => {
    return (
    <div className={styles.product} data-testid="productBox">
        <Image
            src={image}
            className={styles.product__image}
            width="300px"
            height="200px"
        />
        <div className={styles.product__content}>
            <div className={styles.product__info}>
                <h3>{name}</h3>
                <div className={styles.product__prices}>
                    <span className={`${styles.product__price} ${discountPrice ? styles['product__price--discounted'] : ''}`}>{price} €</span>
                    {discountPrice && <span className={styles.product__discountPrice}>{discountPrice} €</span>}
                </div>
            </div>
            <p>{ shortDescription }</p>
            {isNew && <div className={`${styles.product__badge} ${styles['product__badge--new']}`} data-testid="new-badge">NEW</div>}
            {isBestseller && <div className={`${styles.product__badge} ${styles['product__badge--bestseller']}`} data-testid="bestseller-badge">BESTSELLER</div>}
        </div>
    </div>
    );
};
