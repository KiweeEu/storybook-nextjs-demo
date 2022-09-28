import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
    parameters: {
        docs: {
            description: {
                component: 'This is button component documentation',
            },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mode: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: 'secondary',
  label: 'Button',
};

export const Success = Template.bind({});
Success.args = {
    mode: 'success',
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
