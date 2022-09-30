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
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByTestId('voucher'), 'VOUCHER20', { delay: 100 });
    await userEvent.click(canvas.getByRole('button'));

    await expect(
        canvas.getByRole('button')
    ).toHaveTextContent('Voucher applied!');
};
