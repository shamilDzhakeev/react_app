import React from 'react';
import Column from './Column';

export default function ColumnsContainer(props) {
  const sorter = props.sorter;

  return (
    <div className='sorter-container'>
      {sorter.sorterValue.map((value, index) => {
        return <Column key={index} color='white' value={value} index={index} spacing={30} />;
      })}
    </div>
  );
}
