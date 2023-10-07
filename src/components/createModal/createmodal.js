import style from './createmodal.css'
import React, {useState} from 'react'
import Select from 'react-select'
import CreateBtn from '../buttons/createbtn';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { create } from '../../store/index'; 
import {userData,Status} from "../userData/userdata";

export default function CreateModal({display,show,setTicket,ticket,item,handlerModal}){
    const isShow = useSelector((state) => state.index.show)
    const dataState = useSelector((state) => state.index.data)
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
        id: 1
    })

    // push SetBase

    function handlerCreate(){
        dispatch(create({item: base}))    
    }


    return  (
        <div>
        <div className={'createModal'} style={{display:( isShow ? 'block' : 'none')}}>
            <span className='modal_title'>Edit Activity</span>
            <div className={'cancel_icon'} onClick={handlerModal}>
            </div>
            <div className='inputs_Cont'>
                <div className='inputName_cont'>
                    <div className='inputName_title'>
                        <p>Deal Num:</p>
                    </div>
                    <div className='inputName'>
                            <input type={'text'}   onBlur={(e)=>{
                                setBase((state) => {
                                return {
                                    ...state,
                                    name:e.target.value
                                }
                            })
                        }}/>
                    </div>
                </div>
            </div>
            <div className='desc_input_box'>
                <div className='desc_title'>
                        <p>Deal Price:</p>
                </div>
                <div className='description_area'>
                    <textarea type={'text-area'} placeholder={'text area'} onBlur={(e)=>{
                        setBase((state) =>{
                            return{
                                ...state,
                                description:e.target.value
                            }
                        })
                    }}textarea/>
                </div>
            </div>
            <div className='userIdSelect_box'>
                <div className='select_title'>
                    <p>Company:</p>
                </div>
                    <Select
                    options={arruserData}
                    onChange={(i)=>{
                
                        setBase((state)=>{
                            return{
                                ...state,
                                id:dataState[dataState.length-1] ? dataState[dataState.length-1].id+1: 1,
                                progress:i.label
                            }   
                            })
                        }}
                    />
            </div>
                <div className='progress_box'>
                    <div className='select_title'>
                        <p>Progress:</p>
                    </div>
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
                </div>
            <div className='create_btn'>
                <CreateBtn handlerCreate={handlerCreate} base={base} setTicket={setTicket}/>
            </div>
        </div>
        </div>
    )
}