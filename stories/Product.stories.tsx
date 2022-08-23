import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Product } from '../components/Product';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Product',
    component: Product,
} as ComponentMeta<typeof Product>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Product> = (args) => <Product {...args} />;

export const SimpleProduct = Template.bind({});
SimpleProduct.args = {
    name: 'Example Product',
    shortDescription: 'Lorem Ipsum dolor sit amet quisquam est qui dolorem ipsum quia',
    price: 139.99,
    image: '/product-image.jpeg'
};

export const DiscountedProduct = Template.bind({});
DiscountedProduct.args = {
    name: 'Example Product',
    shortDescription: 'Lorem Ipsum dolor sit amet quisquam est qui dolorem ipsum quia',
    price: 139.99,
    discountPrice: 129.99,
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


