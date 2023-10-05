import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show:false,
  data: [],
  comments: false,
  ticket_id: 0,
  write:[]
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
    }
  },
})

export const { isShow,setData ,create,setComments,writeComment} = indexSlice.actions

export default indexSlice.reducer