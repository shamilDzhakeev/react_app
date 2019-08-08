import React from 'react';
import SorterContainer from './SorterContainer';
import ProgressBar from './ProgressBar';

export default function AppBody(props) {
  const sorters = props.sorters; //*
  const totalStepsCount = props.totalStepsCount;
  return (
    <div className={'sorters-container'}>
      {sorters.map(sorter => {
        return (
          <div key={sorter.id}>
            <SorterContainer sorter={sorter} onSorterSteps={props.onSorterSteps} />
            <ProgressBar sorter={sorter} totalStepsCount={totalStepsCount} />
          </div>
        );
      })}
    </div>
  );
}

/* sorters: [
  {
    id: n,
    sorterValue: [],
    sorterObject: {}
  },

  {
    id: n,
    sorterValue: [],
    sorterObject: {}
  }
] 

totalStepsCount: 0

*/
