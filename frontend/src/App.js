import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const[isReg,setIsReg]=useState(true);
  return (
    <div className="App">
      <button onClick={()=>setIsReg(!isReg)}>
        {isReg?'switch to login':'switch to register'}
      </button>
      {
        isReg?<RegisterForm/>:<LoginForm/>
      }
    </div>
  );
}

export default App;