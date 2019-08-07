import React from 'react';

import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import './Styles.css';

class App extends React.Component {
  state = {
    sorters: [[0, 1, 2, 3, 4, 9], [1, 2, 3, 4, 5]],
  };

  handleAddNewValue = value => {
    if (value !== '') {
      const newSorter = value.split('').map(Number);
      this.setState({
        sorters: [...this.state.sorters, newSorter],
      });
      console.log(this.state.sorters);
    }
  };

  render() {
    return (
      <div className="app">
        <AppHeader onAddNewValue={this.handleAddNewValue} />
        <AppBody sorters={this.state.sorters} />
      </div>
    );
  }
}

export default App;
