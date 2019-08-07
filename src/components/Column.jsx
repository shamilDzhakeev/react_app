import React from 'react';

export default function Column(props) {
  const heightFactor = 20;
  const columnStyle = {
    background: props.color,
    height: props.value * heightFactor,
    left: props.index * props.spacing,
  };
  return (
    <div className="column" style={columnStyle}>
      {props.value}
    </div>
  );
}

//props: color, value, index, spacing
