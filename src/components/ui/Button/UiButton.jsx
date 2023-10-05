import React from 'react'
import PropTypes from 'prop-types';
import './UiButton.css';

  /**
   * Компонент Кнопка
   */
export const UiButton = ({ typeBtn, backgroundColor, color, size, onMyClick, children, ...props }) => {
  const style = {
    backgroundColor,
    color,
  }

  return (
    <button onClick={onMyClick}
      className={['ui-button', `ui-button--${size}`, `ui-button--${typeBtn}`].join(' ')}
      style={style}
      {...props}
    >
      {children}
    </button>
  )
}

UiButton.propTypes = {
  /**
   * Тип кнопки. В зависимости от выбранного значения будет меняться вид кнопки
   */
  typeBtn: PropTypes.oneOf(['text', 'primary', 'default']),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onMyClick: PropTypes.func
};

UiButton.defaultProps = {
  typeBtn: 'default',
  backgroundColor: null,
  color: null,
  size: 'medium',
  onMyClick: undefined
};

