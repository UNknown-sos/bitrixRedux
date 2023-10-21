import './App.css';
import Select from 'react-select';
import {userData} from './components/userData/userdata'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch()


  let user = {
    username : '',
    password : ''
}

function handlerCheck(){
  userData.filter((item)=>{
    if(user.username === item.username && user.password === item.password){
      navigate("/home");
    }else{
      console.log("sd");
    }
  })
}


  return (
    <div className="App">
        <div className='mainContainer'>
            <form className='login'>
              <input type='text' placeholder='Username' onBlur={(e)=>{
                user.username = e.target.value
              }}/>
              <input type='password'placeholder='Password' onBlur={(e)=>{
                user.password = e.target.value
              }}/>
              <button onClick={()=>handlerCheck()}>Login</button>
            </form>
        </div>
    </div>
  );
}

export default App;