import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render(){
    return (
      <div className = "calculator-wrapper">
        <CalculatorDisplay />
        <ButtonContainer className = "clear-button">
          <ActionButton className = "three-text" text = "clear" />
          <NumberButton bgColor = "red-button" text = "/" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton bgColor = "num-button" text = "7" />
          <NumberButton bgColor = "num-button" text = "8" />
          <NumberButton bgColor = "num-button" text = "9" />
          <NumberButton bgColor = "red-button" text = "X" />
        </ButtonContainer>
      </div>
    )
  }
}
export default App;
