import { UiPlaceholder } from './UiPlaceholder';

export default {
  title: 'UI/Placeholder',
  component: UiPlaceholder,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'range', min: 20, max: 500, step: 1 },
    },
    height: {
      control: { type: 'range', min: 20, max: 500, step: 1 },
    },
    borderRadius: {
      control: { type: 'range', min: 8, max: 100, step: 1 },
   },

  },
  args: {
    width: 40,
    height: 40,
    borderRadius: 8,

  },
};

export const Default = {
  args: {
    
  },
};

