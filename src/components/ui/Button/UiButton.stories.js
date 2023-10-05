import { UiButton } from './UiButton';

export default {
  title: 'UI/Button',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color', type: 'color' },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      table: {
          defaultValue: { summary: 'small' },
      },
      description: 'Размер кнопки'
    },
    onMyClick: { action: 'clicked'},
  },
  args: {
    children: 'Текст на кнопке',
  },
};

export const Primary = {
  args: {
    typeBtn: 'primary',
  },
};

