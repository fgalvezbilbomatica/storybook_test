// src/components/Button.stories.js
import React from 'react';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Can\'t click me',
  disabled: true,
};

export const myStory = {
  args: {
    label: "my story"
  },

  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
    },
  }
};