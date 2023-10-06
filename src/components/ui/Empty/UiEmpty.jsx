import React from 'react'
import PropTypes from 'prop-types'
import { UiTitle } from '../Title/UiTitle'
import { UiText } from '../Text/UiText'
import './UIEmpty.css'

export const UiEmpty = ({ title, subtitle, ...props }) => {
  return (
    <div className='ui-empty' {...props}>
      <UiTitle level={3}>{title}</UiTitle>
      <UiText color='#6a6a6a' size='small'>
        {subtitle}
      </UiText>
    </div>
  )
}

UiEmpty.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

UiEmpty.defaultProps = {
  title: '',
  subtitle: '',
}
