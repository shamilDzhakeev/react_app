import React from 'react';
import Sorter from './Sorter';

export default function AppBody(props) {
  const sorters = props.sorters;
  return (
    <div className={'soreters-container'}>
      {sorters.map((sorter, index) => {
        return <Sorter key={index} sorterValue={sorter} />;
      })}
    </div>
  );
}
