import { BrowserRouter } from 'react-router-dom';
import CalculatorApp from './components/CalculatorApp';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CalculatorApp />
    </BrowserRouter>
  );
}

export default App;
