import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { setComments, ticket_id } from '../../store'
import {writeComment} from '../../store/index'
import { useState } from 'react'
import { userData } from '../userData/userdata'

import './commentModal.css'

function CommentModal({setComments,comments,commentMenu,write,item,base}){
    const dispatch = useDispatch() 
    const isCommentState = useSelector((state) => state.index.comments)
    const commentsData = useSelector((state) => state.index.write)
    const userId = useSelector((state)=>state.index.userId)
    const ticket_id = useSelector((state)=> state.index.ticket_id)
    const company = useSelector((state)=> state.index.company)

    const [create,setCreate] = useState()
    const [user,setUser] = useState('')

    return(
        <>
            <div className='commentBox' style={{display : isCommentState ? 'flex' : 'none'}}>   
                <div className='commentSpace'>
                        <textarea placeholder='Your Comment!' onBlur={(e)=>{
                                setCreate(e.target.value)
                        }}></textarea>
                        <div className='send' onClick={(e)=>{
                           dispatch(writeComment({write :{
                            comment : create,
                            ticket_id: ticket_id,
                            userId,
                           }}))
                    }}></div>
                </div>
                <div className='head'>
                    <div className='comments_count'>
                       {
                          commentsData.map((item) => {
                        let filteredList = userData.filter((userItem) => {
                                if(userItem.id === item.userId){
                                    return item
                                }   
                            })
                                return (<>
                                <div className='createdBox'>
                                    <img src={filteredList[0].img} width={50} height={50}/>
                                    <p>Username - {filteredList[0].username}</p>
                                   <p>Comment - {item.comment} </p>
                                </div>
                                </>)
                          })
                       }
                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentModal