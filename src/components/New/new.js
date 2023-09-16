import { useSelector } from 'react-redux'
import style from './main.css'

export default function New({ticket,name,description,status,progress,create,id,title,color}) {
    const dataState = useSelector((state) => state.index.data)

    return (
        <div className='new_cont'>
            <div className='title_box' style={{backgroundColor:color}}>
                <p>{title}</p>
            </div>
            <div className='price_box'>
                <p>$46</p>
            </div>
            <div className='add_box'>
                <p>+ Quick Deal</p>
            </div>
            <div className='cards_cont'>
               {dataState.map((item)=>{
                return item.status === id && ( 
                <div className='card'>
                    {/* <div className='card_status'>
                        <p>{item.status}</p>
                    </div> */}
                    <div className='card_name'>
                        <p>{item.name}</p>
                    </div>
                    <div className='card_desc'>
                        <p>{item.description}</p>
                    </div>
                </div>
                )
               })}
            </div>
        </div>
    )
}