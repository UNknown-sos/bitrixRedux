import { useSelector } from 'react-redux'
import style from './main.css'
import {ticket_id} from '../../store/index'

export default function New({ticket,name,description,status,progress,create,id,title,color,commentMenu}) {
    const dataState = useSelector((state) => state.index.data)

    return (
        <div className='new_cont'>
            <div className='title_box' style={{backgroundColor:color}}>
                <p>{title}</p>
            </div>
            <div className='price_box'>
                <p>0$</p>
            </div>
            <div className='add_box'>
                <p>+ Quick Deal</p>
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
                            3 minute ago
                        </p>
                    </div>
                    <div className='company_name'>
                        <p>{item.progress}</p>
                    </div>
                    <div className='reactions_bar'>
                        <div className='comment' onClick={() =>{
                            dispatch(handlerComment({ticket_id}))
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