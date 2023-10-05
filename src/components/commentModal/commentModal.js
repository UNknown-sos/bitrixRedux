import { useDispatch, useSelector } from 'react-redux'
import { setComments } from '../../store'
import {writeComment} from '../../store/index'
import { useState } from 'react'
import './commentModal.css'

function CommentModal({setComments,comments,commentMenu,write}){
    const isCommentState = useSelector((state) => state.index.comments)
    const [create,setCreate] = useState('')

    const dispatch = useDispatch()

    return(
        <>
            <div className='commentBox' style={{display : isCommentState ? 'block' : 'none'}}>
                <div className='head'>
                    <span>
                        <p className='title'>Comment</p>
                        <p className='decoration'>*</p>
                    </span>
                </div>
                <div className='commentSpace'>
                        <textarea placeholder='leave a comment' onBlur={(e)=>{
                            setCreate(e.target.value)
                        }}></textarea>
                        <div className='send' onClick={(e)=>{
                           dispatch(writeComment({write : create}))
                        }}></div>
                </div>
            </div>
        </>
    )
}

export default CommentModal