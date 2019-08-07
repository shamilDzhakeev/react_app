import React from 'react';

export function PrimaryButton(props) {
  return (
    <button className="primary" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export function CloseButton(props) {
  return (
    <button className="close" onClick={props.handleClick}>
      ✖
    </button>
  );
}
