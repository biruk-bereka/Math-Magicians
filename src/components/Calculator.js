import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './styles/Calculator.css';

function Calculator({ symbols }) {
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

Calculator.propTypes = {
  symbols: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Calculator;
