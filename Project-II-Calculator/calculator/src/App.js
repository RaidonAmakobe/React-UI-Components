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
          <NumberButton bgColor
        </ButtonContainer>
      </div>
    )
  }
}
export default App;
