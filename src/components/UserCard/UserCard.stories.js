import { UserCard } from './UserCard'

export default {
  title: 'Components/UserCard',
  component: UserCard,
  tags: ['autodocs'],
  argTypes: {
    typeCard: {
      control: { type: 'select' },
      options: ['block', 'line'],
    },
  },
  args: {
    id: 2,
    username: 'Иванов Иван',
    description: 'Сотрудник года',
    typeCard: 'block',
  },
}

export const CardBlock = {
  args: {
    typeCard: 'block',
  },
}

export const CardLine = {
  args: {
    typeCard: 'line',
  },
}
