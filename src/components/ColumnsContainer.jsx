import React from 'react';
import Column from './Column';

export default function ColumnsContainer(props) {
  const columnsValues = props.columnsValues;
  return (
    <div className="sorter-container">
      {columnsValues.map((value, index) => {
        return <Column key={index} color="red" value={value} index={index} spacing={30} />;
      })}
    </div>
  );
}
