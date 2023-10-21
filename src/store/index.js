import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show:false,
  data: [],
  comments: false,
  ticket_id: 0,
  write:[],
  createAction : ''
}


export const indexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    isShow: (state,action) => {
        console.log(action);
      state.show = action.payload.show
    },
    setData : (state,action) => {
        state.data = action.payload.data
    },
    create : (state,action) => {
      state.data = [
        ...state.data,
          action.payload.item,
      ] 
    },
    setComments : (state,action) => {
      state.comments = action.payload.comments
    },
    writeComment : (state,action) => {
        state.write = [
          ...state.write,
            action.payload.write
        ]
    },
    ticketId : (state,action) => {
      state.ticket_id = action.payload.ticket_id
    },
    createAction:(state,action) => {
      state.actionCreate = action.payload.actionCreate
    }
  },
})

export const { isShow,setData ,create,setComments,writeComment,ticketId,ticket_id,createAction} = indexSlice.actions

export default indexSlice.reducer