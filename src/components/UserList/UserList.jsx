import React from 'react'
import { UserCard } from '../UserCard/UserCard'
import { UiPlaceholder } from '../ui/Placeholder/UiPlaceholder'
import PropTypes from 'prop-types'

import './UserList.css'
import { UiEmpty } from '../ui/Empty/UIEmpty'

export const UserList = ({ loading, users, onDelete }) => {
  const events = {
    onDelete,
  }

  if (loading) {
    return (
      <div className='list-user--items'>
        <UiPlaceholder height={118} width={'100%'} borderRadius={8} />
        <UiPlaceholder height={118} width={'100%'} borderRadius={8} />
        <UiPlaceholder height={118} width={'100%'} borderRadius={8} />
        <UiPlaceholder height={118} width={'100%'} borderRadius={8} />
        <UiPlaceholder height={118} width={'100%'} borderRadius={8} />
      </div>
    )
  }

  if (users.length === 0) {
    return (
      <div className='list-user--items'>
        <UiEmpty title='Нет пользователей' subtitle='Список пуст' />
      </div>
    )
  }

  return (
    <div className='list-user--items'>
      {users.map((user, index) => (
        <UserCard key={index} id={user.id} username={user.username} description={user.description} {...events} />
      ))}
    </div>
  )
}

UserList.propTypes = {
  loading: PropTypes.bool,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func,
}
UserList.defaultProps = {
  loading: false,
}
