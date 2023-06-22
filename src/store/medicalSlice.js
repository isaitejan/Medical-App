import { createSlice } from '@reduxjs/toolkit';

const medicalSlice = createSlice({
  name: 'medicalStore',
  initialState: {
    bills: [],
    editButton: false,
    editButtonData: {}
  },
  reducers: {
    addBill: (state, action) => {
      state.bills.push(action.payload);
    },
    editBillObject: (state, action) => {
      let eData = action.payload;
      let new_arr = state.bills.map((obj)=>{
        if(obj.billId === eData.billId){
          return eData;
        }
        return obj;
      });
      state.bills = new_arr;
    },
    editButtonClick: (state, action) => {
      state.editButton = action.payload;
    },
    editButtonClickData: (state, action) =>{
       state.editButtonData = action.payload;
    }
  },
});

export const { addBill, editButtonClick, editButtonClickData, editBillObject } = medicalSlice.actions;
export default medicalSlice.reducer;
