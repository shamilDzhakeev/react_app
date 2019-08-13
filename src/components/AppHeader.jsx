import React from 'react';
import PropTypes from 'prop-types';

import { PrimaryButton } from './Buttons';

class AppHeader extends React.Component {
  state = {
    value: '',
  };

  handleAddNewValue = () => {
    this.props.onAddNewValue(this.state.value);
  };

  handleInputTextChange = event => {
    const inputtedString = event.target.value;
    if (inputtedString) {
      const valuesArray = inputtedString.match(/\d/g);
      let valueString = '';
      if (valuesArray) {
        valueString = valuesArray.join('');
        this.setState({ value: valueString });
      }
      event.target.value = valueString;
    } else {
      this.setState({ value: '' });
    }
  };

  render() {
    return (
      <div className='app-header'>
        Данные
        <input type='text' onChange={this.handleInputTextChange} />
        <PrimaryButton handleClick={this.handleAddNewValue} label='Добавить' />
      </div>
    );
  }
}

AppHeader.propTypes = {
  onAddNewValue: PropTypes.func.isRequired,
};

export default AppHeader;
