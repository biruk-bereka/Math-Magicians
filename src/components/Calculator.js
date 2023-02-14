import React from 'react';
import Button from './Button';
import './styles/Calculator.css';

function Calculator() {
  const symbols = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="buttons">
        {
            symbols.map((symbol) => (
              <Button key={symbol} value={symbol} />
            ))
        }
      </div>
    </div>
  );
}

export default Calculator;
