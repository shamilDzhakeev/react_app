import React from 'react';
import PropTypes from 'prop-types';

import { CloseButton, PrimaryButton } from './Buttons';

export default class SorterHeader extends React.Component {
  sorterID = this.props.sorter.id;

  handleCloseSorter = () => {
    this.props.onSorterClose(this.sorterID);
  };

  render() {
    return (
      <div className='sorter-header'>
        <PrimaryButton
          label='<<'
          handleClick={() => {
            this.props.onSorterSteps.handleStepBackOnSorter(this.sorterID);
          }}
        />
        <PrimaryButton
          label='>>'
          handleClick={() => {
            this.props.onSorterSteps.handleStepUpOnSorter(this.sorterID);
          }}
        />
        <CloseButton handleClick={this.handleCloseSorter} />
      </div>
    );
  }
}

SorterHeader.propTypes = {
  sorter: PropTypes.shape({
    id: PropTypes.number,
    sorterValue: PropTypes.arrayOf(PropTypes.number),
    sorterObject: PropTypes.object,
  }),
  onSorterSteps: PropTypes.object.isRequired,
  onSorterClose: PropTypes.func.isRequired,
};
