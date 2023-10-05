import { UiTitle } from './UiTitle';

export default {
  title: 'UI/Title',
  component: UiTitle,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'inline-radio' },
      options: [1, 2, 3, 4],
    },
    children: {
      table: {
          defaultValue: { summary: '' },
      },
    },
  },
  args: {
    children: 'Текст который мы напечатали',
    level: 1,
  },
};


export const h1 = {
  args: {
    level: 1,
  },
};

export const h2 = {
  args: {
    level: 2,
  },
};

export const h3 = {
  args: {
    level: 3,
  },
};

export const h4 = {
  args: {
    level: 4,
  }
}
