import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { VoucherForm } from '../components/VoucherForm';

export default {
    title: 'Example/VoucherForm',
    component: VoucherForm,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof VoucherForm>;

const Template: ComponentStory<typeof VoucherForm> = (args) => <VoucherForm {...args} />;

export const EmptyForm = Template.bind({});
EmptyForm.args = {
    voucher: '',
};

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByTestId('voucher'), 'VOUCHER20', { delay: 100 });

    // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));

    // 👇 Assert DOM structure
    await expect(
        canvas.getByRole('button')
    ).toHaveTextContent('Voucher applied!');
};
