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

  // return (
  //   <>
  //     <Toaster position="top-right" />
  //     <div className="App p-5 d-flex justify-center ">
  //       <div className='flex justify-center'>
  //         <img className='mt-5' src={NoteCodeLogo} />
  //       </div>
  //       <div className='mt-8 p-3 '>
  //         <h1 className='text-[32px] font-semibold '>Create & Share </h1>
  //         <h1 className='font-bold text-[40px]'>Your Code easily </h1>
  //       </div>

  //       <div>
  //         <ShareCom />
  //       </div>

  //     </div>
  //   </>

  // );
}

export default App;
