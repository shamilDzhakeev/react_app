import React from 'react';
import PropTypes from 'prop-types';

import { CloseButton } from './Buttons';

export default class ProgressBar extends React.Component {
  percentage = this.props.percentage;

  render() {
    const progressBarStyle = {
      background: `linear-gradient(90deg, ${'gray'} ${this.percentage}%, var(--white) ${this.percentage}%)`,
    };
    return (
      <div className='progress-bar' style={progressBarStyle}>
        <span className='progress-bar-label'>{`${this.props.label}`}</span>
        <CloseButton handleClick={this.props.onProgressBarClose} />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onProgressBarClose: PropTypes.func.isRequired,
};
