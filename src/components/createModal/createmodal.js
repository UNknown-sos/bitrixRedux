import style from './createmodal.css'
import React, {useState} from 'react'
import Select from 'react-select'
import CreateBtn from '../buttons/createbtn';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { create } from '../../store/index'; 
import {userData,Status} from "../userData/userdata";
import { useEffect } from 'react';

export default function CreateModal({display,show,setTicket,ticket,item,handlerModal}){
    const isShow = useSelector((state) => state.index.show)
    const dataState = useSelector((state) => state.index.data)
    const createAction = useSelector((state)=> state.index.actionCreate)
    const dispatch = useDispatch()
    
    let arruserData = []
    userData.map(item => {
        arruserData.push({value:item.id,label:item.username})
    })

    const [base,setBase] = useState({
        number:'',
        price:'',
        status: 0,
        company: 0,
        id: 1
    })


    useEffect(()=>{
        if(createAction === 'statusCreated'){
            const def = {
                value: 0,
                label: ''
            }
        }
    },[])


    // push SetBase

    function handlerCreate(){
        dispatch(create({item: base}))    
    }

    // console.log(base)
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
                                    number:e.target.value
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
                                price:e.target.value
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
                                company:i.label
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