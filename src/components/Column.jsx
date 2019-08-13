import React from 'react';
import PropTypes from 'prop-types';

export default function Column(props) {
  const heightFactor = 20;
  const spacing = 30;
  const columnStyle = {
    background: props.color,
    height: props.value * heightFactor,
    left: props.index * spacing,
  };
  return (
    <div className='column' style={columnStyle}>
      {props.value}
    </div>
  );
}

Column.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
