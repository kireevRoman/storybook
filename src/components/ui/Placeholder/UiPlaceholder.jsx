import React from 'react'
import PropTypes from 'prop-types'
import './UiPlaceholder.css'

export const UiPlaceholder = ({ width, height, borderRadius, ...props }) => {
  const style = {
    width: width,
    height: height,
    borderRadius: borderRadius,
  }

  console.log(style)

  return <span className={['ui-placeholder', 'ui-placeholder--animation'].join(' ')} style={style} {...props}></span>
}

UiPlaceholder.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  borderRadius: PropTypes.number,
}

UiPlaceholder.defaultProps = {
  width: 200,
  height: 50,
  borderRadius: 8,
}
