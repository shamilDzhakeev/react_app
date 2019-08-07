import React from 'react';
import SorterHeader from './SorterHeader';
import ColumnsContainer from './ColumnsContainer';

export default function Sorter(props) {
  const sorterValue = props.sorterValue;
  return (
    <div className="sorter">
      <SorterHeader />
      <ColumnsContainer columnsValues={sorterValue}>ColumnsContainer</ColumnsContainer>
    </div>
  );
}
