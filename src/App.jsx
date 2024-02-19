import { ToastContainer } from 'react-toastify';

import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Home />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
