import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show:false
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
        console.log(action)
        state.datas = action.payload.datas
    }
  },

})

export const { isShow,setData } = indexSlice.actions

export default indexSlice.reducer