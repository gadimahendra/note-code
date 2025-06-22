// import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast';
import { Navigate, Routes, Route } from 'react-router-dom';
import Main from './pages/main';

function App() {

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/:id?" element={<Main />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </>
  );

}

export default App;
