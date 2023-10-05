import React from 'react'
import { UserCard } from '../UserCard/UserCard'
import { UiPlaceholder } from '../ui/Placeholder/UiPlaceholder'
import PropTypes from 'prop-types'

export const UserList = ({ loading, users, onDelete }) => {
  const events = {
    onDelete,
  }

  if (loading) {
    return (
      <div className='list-items' data-testid='loading' key={'loading'}>
        <div className='loading-item'>
          <UiPlaceholder height={118} width={500} style={{ marginBottom: 20 }} />
          <UiPlaceholder height={118} width={500} style={{ marginBottom: 20 }} />
          <UiPlaceholder height={118} width={500} style={{ marginBottom: 20 }} />
          <UiPlaceholder height={118} width={500} style={{ marginBottom: 20 }} />
        </div>
      </div>
    )
  }

  if (users.length === 0) {
    return (
      <div className='list-items' key={'empty'} data-testid='empty'>
        <div className='wrapper-message'>
          <span className='icon-check' />
          <p className='title-message'>You have no tasks</p>
          <p className='subtitle-message'>Sit back and relax</p>
        </div>
      </div>
    )
  }

  return (
    <div className='list-items'>
      {users.map((user) => (
        <UserCard key={user.id} id={user.id} username={user.username} description={user.description} {...events} />
      ))}
    </div>
  )
}

UserList.propTypes = {
  loading: PropTypes.bool,
  users: PropTypes.arrayOf({
    id: UserCard.propTypes.id,
    username: UserCard.propTypes.username,
    description: UserCard.propTypes.description,
    typeCard: UserCard.propTypes.typeCard,
  }).isRequired,
  onDelete: PropTypes.func,
}
UserList.defaultProps = {
  loading: false,
}
