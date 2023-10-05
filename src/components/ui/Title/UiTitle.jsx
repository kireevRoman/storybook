import React from 'react'
import PropTypes from 'prop-types'
import './UiTitle.css'

export const UiTitle = ({ color, level, children, ...props }) => {
  const style = {
    color,
  }

  const TitleElement = `h${level}`

  return (
    <TitleElement className={['ui-title', `ui-title--h${level}`].join(' ')} style={style} {...props}>
      {children}
    </TitleElement>
  )
}

UiTitle.propTypes = {
  color: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4]),
}

UiTitle.defaultProps = {
  color: null,
  level: 1,
}
