import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show:false,
  data: []
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
          action.payload.item
      ] 
    }
  },

})

export const { isShow,setData ,create} = indexSlice.actions

export default indexSlice.reducer