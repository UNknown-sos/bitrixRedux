import { useDispatch, useSelector } from 'react-redux'
import style from './main.css'
import {isShow, ticket_id} from '../../store/index'
import { ticketId } from '../../store/index'
import { createAction } from '@reduxjs/toolkit'

export default function New({ticket,name,description,status,progress,create,id,title,color,commentMenu,handlerCreate}) {
    const dataState = useSelector((state) => state.index.data)
    const dispatch = useDispatch()

    const modalShow = useSelector((state)=>state.index.show)
    

    return (
        <div className='new_cont'>
            <div className='title_box' style={{backgroundColor:color}}>
                <p>{title}</p>
            </div>
            <div className='price_box'>
                <p>0$</p>
            </div>
            <div className='add_box' onClick={()=>{
                dispatch(isShow({show:!modalShow}))

                dispatch(createAction({actionCreate:'statusCreated'}))

                dispatch()
            }}>
                <p>+</p>
            </div>
            <div className='cards_cont'>
               {dataState.map((item)=>{
                return item.status === id && ( 
                <div className='card'>
                    <div className='card_name'>
                        <p>Deal #{item.name}</p>
                    </div>
                    <div className='card_desc'>
                        <p>€{item.description}</p>
                    </div>
                    <div className='add_data'>
                        <p>
                            right now
                        </p>
                    </div>
                    <div className='company_name'>
                        <p>{item.progress}</p>
                    </div>
                    <div className='reactions_bar'>
                        <div className='comment' onClick={() =>{
                            dispatch(ticketId({ticket_id}))
                            commentMenu()
                        }}>
                            <p>C</p>
                        </div>
                        <div className='like'>
                            <p>D</p>
                        </div>
                    </div>
                </div>
                )
               })}
            </div>
        </div>
    )
}