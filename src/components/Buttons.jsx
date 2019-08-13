import React from 'react';
import PropTypes from 'prop-types';

export function PrimaryButton(props) {
  return (
    <button className='primary' onClick={props.handleClick}>
      {props.label}
    </button>
  );
}

export function CloseButton(props) {
  return (
    <button className='close' onClick={props.handleClick}>
      ✖
    </button>
  );
}

PrimaryButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string,
};

CloseButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
