import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'тёмный', value: '#000' },
        { name: 'светлый', value: '#fff' },
        { name: 'зелёный', value: '#0f0' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color', if : { arg: 'size', eq: 'large' } },
    size: {
      control: { type: 'inline-radio' },
      options: ['small', 'medium', 'large'],
      table: {
          defaultValue: { summary: 'small' },
      },
      description: 'Определяет визуальный размер кнопки'
    }

  }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
