import Landing from './Landing';
import Auth from './Auth';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;