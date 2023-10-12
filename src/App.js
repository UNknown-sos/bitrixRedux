import './App.css';
import Select from 'react-select';
import {userData} from './components/userData/userdata'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // if(user.username === userData.username && user.password === userData.password){
  //   console.log(true)
  // }else{
  //   console.log(false)
  // }

  let user = {
    username : '',
    password : ''
}

function handlerCheck(){
  userData.filter((item)=>{
    if(user.username === item.username && user.password === item.password){
        console.log("uraaa!");
    }else{
      console.log('yaxq araaa@!');
    }
  })
}


  return (
    <div className="App">
        <div className='mainContainer'>
            <header>
              <span>Login</span>
            </header>
           <div className='input--container'>
            <div className='usernameInput--box'>
                  <input type='text' placeholder='Username' onBlur={(e)=>{
                      user.username = e.target.value
                      console.log(user.username);
                  }}/>
              </div>
              <div className='passwordInput--box'>
                  <input type='password' placeholder='Password' onBlur={(e)=>{
                    user.password = e.target.value
                    console.log(user.password);
                  }}/>
              </div>
           </div>
           <div className='login_btn' onClick={()=>handlerCheck()}>
                <span>Log In</span>
           </div>
        </div>
    </div>
  );
}

export default App;
