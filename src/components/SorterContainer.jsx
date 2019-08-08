import React from 'react';
import SorterHeader from './SorterHeader';
import ColumnsContainer from './ColumnsContainer';

export default function Sorter(props) {
  const sorter = props.sorter; //*

  return (
    <div className='sorter'>
      <SorterHeader onSorterSteps={props.onSorterSteps} sorter={sorter} />
      <ColumnsContainer sorter={sorter} />
    </div>
  );
}

/*
  {
    id: n,
    sorterValue: [],
    sorterObject: {}
  }
*/
