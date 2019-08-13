import React from 'react';

import AppHeader from './AppHeader';
import AppBody from './AppBody';
import Sorter from './Sorter';
import '../styles.css';

class App extends React.Component {
  state = {
    uniqueID: 0,
    totalStepsCount: 0,
    sorters: [],
  };

  handleAddNewValue = value => {
    if (value) {
      const valuesArray = value.split('').map(Number);
      this.setState({
        sorters: [
          ...this.state.sorters,
          { id: this.state.uniqueID, sorterValue: [...valuesArray], sorterObject: new Sorter(valuesArray) },
        ],
        uniqueID: this.state.uniqueID + 1,
      });
    }
  };

  handleDeleteSorter = id => {
    this.setState({
      sorters: this.state.sorters.filter(sorter => !(sorter.id === id)),
    });
  };

  handleStepBackOnSorter = sorterID => {
    this.setState({
      totalStepsCount: this.state.totalStepsCount - 1,
      sorters: this.state.sorters.map(sorter => {
        if (sorter.id === sorterID) {
          const newValue = sorter.sorterObject.doStepBack();
          return Object.assign({}, sorter, { sorterValue: newValue });
        }
        return sorter;
      }),
    });
  };

  handleStepUpOnSorter = sorterID => {
    this.setState({
      totalStepsCount: this.state.totalStepsCount + 1,
      sorters: this.state.sorters.map(sorter => {
        if (sorter.id === sorterID) {
          const newValue = sorter.sorterObject.doStepUp();
          return Object.assign({}, sorter, { sorterValue: newValue });
        }
        return sorter;
      }),
    });
  };

  render() {
    const onSorterStepsMethods = {
      handleStepBackOnSorter: this.handleStepBackOnSorter,
      handleStepUpOnSorter: this.handleStepUpOnSorter,
    };
    return (
      <div className='app'>
        <AppHeader onAddNewValue={this.handleAddNewValue} />
        <AppBody
          onSorterSteps={onSorterStepsMethods}
          onSorterClose={this.handleDeleteSorter}
          sorters={this.state.sorters}
          totalStepsCount={this.state.totalStepsCount}
        />
      </div>
    );
  }
}

export default App;
