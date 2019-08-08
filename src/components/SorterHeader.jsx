import React from 'react';
import { CloseButton, PrimaryButton } from './Buttons';

export default class SorterHeader extends React.Component {
  sorterID = this.props.sorter.id;

  render() {
    return (
      <div className='sorter-header'>
        <PrimaryButton
          label='<<'
          onClick={() => {
            this.props.onSorterSteps.handleStepBackOnSorter(this.sorterID);
          }}
        />
        <PrimaryButton
          label='>>'
          onClick={() => {
            this.props.onSorterSteps.handleStepUpOnSorter(this.sorterID);
          }}
        />
        <CloseButton />
      </div>
    );
  }
}
