import React from 'react';
import PropTypes from 'prop-types';

import Column from './Column';

export default function ColumnsContainer(props) {
  const sorter = props.sorter;

  return (
    <div className='sorter-container'>
      {sorter.sorterValue.map((value, index) => {
        return <Column key={index} color='white' value={value} index={index} />;
      })}
    </div>
  );
}

ColumnsContainer.propTypes = {
  sorter: PropTypes.shape({
    id: PropTypes.number,
    sorterValue: PropTypes.arrayOf(PropTypes.number),
    sorterObject: PropTypes.object,
  }),
};
