import style from './createmodal.css'
import React, {useState} from 'react'
import Select from 'react-select'
import CreateBtn from '../buttons/createbtn';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { create } from '../../store/index'; 
import {userData,Status} from "../userData/userdata";

export default function CreateModal({display,show,setTicket,ticket,item}){
    const isShow = useSelector((state) => state.index.show)
    
    const dispatch = useDispatch()
    
    let arruserData = []
    userData.map(item => {
        arruserData.push({value:item.id,label:item.username})
    })

    const [base,setBase] = useState({
        name:'',
        description:'',
        status: 0,
        progress: 0,
    })

    // push SetBase

    function handlerCreate(){
        dispatch(create({item: base}))    
    }
    

    return  (
        <div className={'createModal'} style={{display:( isShow ? 'block' : 'none')}}>
            <div className={'cancel_icon'} onClick={()=>{
                if(display ==='none'){
                    show('block')
                } else if(display === 'block'){
                    show('none')
                }
            }}>
            </div>
            <div className='inputs_Cont'>
            <div className='name_input_box'>
                <input type={'text'} placeholder={'name'}  onBlur={(e)=>{
                setBase((state) => {
                    return {
                        ...state,
                        name:e.target.value
                    }
                    
                })
                }}/>
            </div>
            <div className='desc_input_box'>
                <input type={'text'} placeholder={'desc'} onBlur={(e)=>{
                    setBase((state) =>{
                        return{
                            ...state,
                            description:e.target.value
                        }
                    })
                }}/>
            </div>
            </div>
            <Select
                options={arruserData}
                onChange={(i)=>{
                    setBase((state)=>{
                        return{
                            ...state,
                            progress:i.label
                        }
                    })
                }}
            />
                <Select
                options={Status}
                onChange={(i)=>{
                    setBase((state)=>{
                        return{
                            ...state,
                            status:i.value
                        }
                    })
                }}
                />
            <div className='create_btn'>
                <CreateBtn handlerCreate={handlerCreate} base={base} setTicket={setTicket}/>
            </div>
        </div>
    )
}