import React, { useState } from 'react';
import CardComp from './CardComp';
import {  useSelector, useDispatch } from 'react-redux';
import { addBill } from '../store/medicalSlice';
import { store } from "../store/store";


export default function AddForm() {

  // const bills = useSelector((state)=>state.bills);
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    patientName: '',
    address: '',
    hospitalName: '',
    dateOfService: '',
    billAmount: '',
    billImage: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    try{
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
      setFormData({ ...formData, billImage: reader.result });
    };
    }catch(error){
      console.log(error);
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      patientName: '',
      address: '',
      hospitalName: '',
      dateOfService: '',
      billAmount: '',
      billImage: ''
    });

    dispatch(addBill({...formData, billId:store.getState().medicalStore.bills.length+1}));
  };

  return (
    <div className='container'>
        <div className='row'>
          <div className='col-md-6 '>
          <h2 className="mt-4">Add New Bill</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group p-1">
              <label>Patient Name:</label>
              <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group p-1">
              <label>Address:</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group p-1">
              <label>Hospital Name:</label>
              <input type="text" name="hospitalName" value={formData.hospitalName} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group p-1">
              <label>Date of Service:</label>
              <input type="date" name="dateOfService" value={formData.dateOfService} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group p-1">
              <label>Bill Amount:</label>
              <input type="text" name="billAmount" value={formData.billAmount} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group  p-1">
              <label>Bill Image:</label>
              <input type="file" onChange={handleImageChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className='col-md-6'>
          <h2 className="mt-4">Bills Dashboard</h2>
          {store.getState().medicalStore.bills.length !== 0 ? (
            store.getState().medicalStore.bills.map((bill, index)=>{
              return <CardComp key={index} bill_obj={bill}/>
            })
          ):<p>No bills uploaded yet!</p>}
        </div>
        </div>
    </div>
  )
}
