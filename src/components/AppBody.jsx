import React from 'react';
import PropTypes from 'prop-types';

import SorterContainer from './SorterContainer';
import ProgressBar from './ProgressBar';

export default function AppBody(props) {
  const sorters = props.sorters;
  const totalStepsCount = props.totalStepsCount;

  const handleCloseProgressBar = id => {
    props.onSorterClose(id);
  };

  return (
    <div className={'sorters-container'}>
      {sorters.map(sorter => {
        return (
          <div key={sorter.id}>
            <SorterContainer
              sorter={sorter}
              onSorterSteps={props.onSorterSteps}
              onSorterClose={props.onSorterClose}
            />
            <ProgressBar
              percentage={
                sorter.sorterObject.stepsCount === totalStepsCount
                  ? sorter.sorterObject.stepsCount
                    ? 100
                    : 0
                  : (sorter.sorterObject.stepsCount * 100) / totalStepsCount
              }
              label={`${sorter.sorterObject.stepsCount}`}
              onProgressBarClose={() => {
                handleCloseProgressBar(sorter.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

AppBody.propTypes = {
  onSorterSteps: PropTypes.object.isRequired,
  onSorterClose: PropTypes.func.isRequired,
  sorters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sorterValue: PropTypes.arrayOf(PropTypes.number),
      sorterObject: PropTypes.object,
    }).isRequired
  ).isRequired,
  totalStepsCount: PropTypes.number.isRequired,
};
