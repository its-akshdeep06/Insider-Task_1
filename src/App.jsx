import Landing from './Landing';
import Auth from './Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;