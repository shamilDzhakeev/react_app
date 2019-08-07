import React from 'react';
import { PrimaryButton } from './Buttons';

class AppHeader extends React.Component {
  state = {
    value: '',
  };

  handleAddNewValue = () => {
    this.props.onAddNewValue(this.state.value);
  };

  handleInputTextChange = event => {
    const value = event.target.value;
    for (let char of value) {
      if ('0123456789'.indexOf(char) === -1) {
        event.target.value = value.slice(0, value.length - 1);
        return;
      }
    }
    this.setState({ value });
  };

  render() {
    return (
      <div className="app-header">
        Данные
        <input type="text" onChange={this.handleInputTextChange} />
        <PrimaryButton onClick={this.handleAddNewValue} label="Добавить" />
      </div>
    );
  }
}

export default AppHeader;
