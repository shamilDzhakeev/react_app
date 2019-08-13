import React from 'react';
import PropTypes from 'prop-types';

import SorterHeader from './SorterHeader';
import ColumnsContainer from './ColumnsContainer';

export default function SorterContainer(props) {
  const sorter = props.sorter;

  return (
    <div className='sorter'>
      <SorterHeader onSorterSteps={props.onSorterSteps} sorter={sorter} onSorterClose={props.onSorterClose} />
      <ColumnsContainer sorter={sorter} />
    </div>
  );
}

SorterContainer.propTypes = {
  onSorterClose: PropTypes.func.isRequired,
  sorter: PropTypes.shape({
    id: PropTypes.number,
    sorterValue: PropTypes.arrayOf(PropTypes.number),
    sorterObject: PropTypes.object,
  }),
  onSorterSteps: PropTypes.object.isRequired,
};
