import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Product } from '../components/Product';

export default {
    title: 'Example/Product',
    component: Product,
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />;

export const SimpleProduct = Template.bind({});
SimpleProduct.args = {
    name: 'Example Product',
    shortDescription: 'Lorem Ipsum dolor sit amet quisquam est qui dolorem ipsum quia',
    price: 139.99,
    isBestseller: false,
    isNew: false,
    image: '/product-image.jpeg'
};

export const DiscountedProduct = Template.bind({});
DiscountedProduct.args = {
    name: 'Example Product',
    shortDescription: 'Lorem Ipsum dolor sit amet quisquam est qui dolorem ipsum quia',
    price: 139.99,
    discountPrice: 129.99,
    isBestseller: false,
    isNew: false,
    image: '/product-image.jpeg'
};

export const BestsellerProduct = Template.bind({});
BestsellerProduct.args = {
    name: 'Example Product',
    shortDescription: 'Lorem Ipsum dolor sit amet quisquam est qui dolorem ipsum quia',
    price: 139.99,
    isBestseller: true,
    image: '/product-image.jpeg'
};

export const NewProduct = Template.bind({});
NewProduct.args = {
    name: 'Example Product',
    shortDescription: 'Lorem Ipsum dolor sit amet quisquam est qui dolorem ipsum quia',
    price: 139.99,
    isNew: true,
    image: '/product-image.jpeg'
};


