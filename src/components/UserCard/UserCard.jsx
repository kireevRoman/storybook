import React from 'react'
import PropTypes from 'prop-types'
import { UiTitle } from '../ui/Title/UiTitle'
import { UiText } from '../ui/Text/UiText'

import './UserCard.css'
import { Avatar } from '../ui/Avatar/Avatar'

export const UserCard = ({ id, username, description, typeCard, onDelete, ...props }) => {
  return (
    <div className={['user-card', `user-card--${typeCard}`].join(' ')} {...props}>
      <Avatar />
      <div className='user-card--content'>
        <UiTitle level={2}>{username}</UiTitle>
        <UiText color='#6a6a6a'>{description}</UiText>
      </div>
      <span className='user-card--delete' onClick={() => onDelete(id)}>
        x
      </span>
    </div>
  )
}

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  typeCard: PropTypes.oneOf(['block', 'line']),
  onDelete: PropTypes.func,
}

UserCard.defaultProps = {
  typeCard: 'line',
}
