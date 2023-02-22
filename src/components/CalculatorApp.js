import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../routes/Home';
import Calculator from '../routes/Calculator';
import Quote from '../routes/Quote';

const CalculatorApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Route>
  </Routes>
);

export default CalculatorApp;
