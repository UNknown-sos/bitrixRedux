import style from './buttons.css'
import CreateModal from '../createModal/createmodal';
import {useState} from "react";
import App from "../../App";

 function CreateBtn({handlerCreate,setTicket,base}){

    return(
        <button className='createBtn' onClick={handlerCreate}>CREATE</button>
    )
}

export default CreateBtn