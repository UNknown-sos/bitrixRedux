import logo from './logo.svg';
import './App.css';
import Select from 'react-select';
import Header from './components/header';
import New from './components/New/new';
import CreateBtn from "./components/buttons/createbtn";
import {useState} from "react";
import CreateModal from "./components/createModal/createmodal";
import { useDispatch , useSelector} from 'react-redux';
import { isShow } from './store/index';
import { setData } from './store/index';

function App() {
 ////const [ishow,setiShow] = useState('none')
  const [ticket,setTicket] = useState([])

  const dispatch = useDispatch()
  const isShowState = useSelector((state) => state.index.show)

  const handlerCreate = () =>{
   console.log(isShowState,'isShowStateisShowState');
    if(isShowState){
       dispatch(isShow({show:false}))
    } else{
      dispatch(isShow({show:true}))
    }
  }


  return (

    <div className="App">
      <div className='bg'>
        <Header/>
        <div className='navigation_bar_box'>
          <div className='nav_title_box'>
            <p>Deals</p>
          </div>
          <div className='createBtn_box'>
            <CreateBtn handlerCreate={handlerCreate}/>
          </div>
          <div className='general_box'>
            <p>General</p>
          </div>
          <div className='search_box'>
            <div className='Deals_box'>Deals in Progress</div>
            <input className='search' placeholder='search'></input>
          </div>
          <div className='settings_box'>
            <div className='settings'></div>
          </div>
        </div>
        <div className='nav_bar2_box'>
          <div className='nav_bar2'></div>
          <div className='nav_bar3'></div>
        </div>
        <div className='main_cont'>
          <New ticket={ticket} title={'New'} id={1} color={'green'}/>
          <New ticket={ticket} title={'In Progress'} id={2} color={'orange'}/>
          <New ticket={ticket} title={'Testing'} id={3} color={'yellow'}/>
          <New ticket={ticket} title={'Done'} id={4} color={'red'}/>
        </div>
      </div>
      <CreateModal  setTicket={setTicket} ticket={ticket}/>
    </div>
  );
}

export default App;
