import { setComments } from '../../store'
import './commentModal.css'

function CommentModal({setComments,comments}){
    return(
        <>
            <div className='commentBox'>
                <div className='head'>
                    <span>
                        <p className='title'>Comment</p>
                        <p className='decoration'>*</p>
                    </span>
                </div>
                <div className='commentSpace'>
                        <textarea onBlur={(e)=>{
                            setComments((state)=>{
                                return{
                                    ...state,
                                    comment:e.target.value
                                }
                            })
                        }}>
                            
                        </textarea>
                        <div className='send'></div>
                </div>
            </div>
        </>
    )
}

export default CommentModal