import { UiText } from './UiText';

export default {
  title: 'UI/Text',
  component: UiText,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    children: {
      table: {
          defaultValue: { summary: '' },
      },
    },
  },
  args: {
    children: 'Текст который мы напечатали',
    size: 'medium',
    underline: false,
    through: false,
  },
};

export const Default = {
  args: {
    
  },
};
export const Underline = {
  args: {
    underline: true,
  },
};
export const Through = {
  args: {
    through: true,
  },
};

