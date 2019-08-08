import React from 'react';
import { CloseButton } from './Buttons';

export default class ProgressBar extends React.Component {
  sorter = this.props.sorter;
  totalStepsCount = this.props.totalStepsCount;

  render() {
    let percentage = null;
    const currentSorterStepsCount = this.sorter.sorterObject.stepsCount;
    if (currentSorterStepsCount === this.totalStepsCount) {
      percentage = currentSorterStepsCount ? 100 : 0;
    } else {
      percentage = (currentSorterStepsCount * 100) / this.totalStepsCount;
    }

    const progressBarStyle = {
      background: `linear-gradient(90deg, ${'gray'} ${percentage}%, var(--white) ${percentage}%)`,
    };
    return (
      <div className='progress-bar' style={progressBarStyle}>
        <span className='progress-bar-label'>{`${currentSorterStepsCount}`}</span>
        <CloseButton />
      </div>
    );
  }
}
