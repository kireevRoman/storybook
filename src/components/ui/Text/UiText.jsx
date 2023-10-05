import React from 'react'
import PropTypes from 'prop-types';
import './UiText.css';

export const UiText = ({ color, size, underline, through, children, ...props }) => {
const mod = [underline && 'ui-text--underline', through && 'ui-text--through'].filter(Boolean).join(' ')

  const style = {
    color
  }

  return (
    <span
      className={['ui-text', `ui-text--${size}`, mod].join(' ')}
      style={style}
      {...props}
    >
      {children}
    </span>
  )
}

UiText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  underline: PropTypes.bool,
  through: PropTypes.bool,
};

UiText.defaultProps = {
  color: null,
  size: 'medium',
  underline: false,
  through: false,
};

