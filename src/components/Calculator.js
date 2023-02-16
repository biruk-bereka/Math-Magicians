import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import './styles/Calculator.css';

function Calculator() {
  const symbols = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const initialState = {
    total: null,
    next: null,
    operation: null,
  };
  const [state, setState] = useState(initialState);
  const hanldeClick = (e) => {
    const result = calculate(state, e.target.innerText);
    setState(result);
  };
  const display = () => {
    const { total, next } = state;
    if (!next) return total;
    return next;
  };

  return (
    <div className="calculator">
      <div className="display">{display() || '0'}</div>
      <div className="buttons">
        {
            symbols.map((symbol) => (
              <Button key={symbol} value={symbol} hanldeClick={hanldeClick} />
            ))
        }
      </div>
    </div>
  );
}

export default Calculator;
