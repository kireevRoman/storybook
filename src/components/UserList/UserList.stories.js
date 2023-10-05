import { UserList } from './UserList'
import * as UserCardStories from '../UserCard/UserCard.stories'

export default {
  title: 'Components/UserList',
  component: UserList,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    users: [
      { ...UserCardStories.CardLine.args, id: 1, username: 'Иванов Иван', description: 'Директор' },
      { ...UserCardStories.CardLine.args, id: 2, username: 'Петров Петр', description: 'Бухгалтер' },
      { ...UserCardStories.CardLine.args, id: 3, username: 'Сидоров Сидор', description: 'Секретарь' },
      { ...UserCardStories.CardLine.args, id: 4, username: 'Дмитриев Дмитрий', description: 'Главный' },
      { ...UserCardStories.CardLine.args, id: 5, username: 'Иванов Иванчик', description: 'Главный работник' },
    ],
  },
}

export const Loading = {
  args: {
    users: [],
    loading: true,
  },
}

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
}
