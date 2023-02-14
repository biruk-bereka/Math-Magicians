import './App.css';
import Calculator from './components/Calculator';

function App() {
  const symbols = ['AC', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div>
      <Calculator symbols={symbols} />
    </div>
  );
}

export default App;
