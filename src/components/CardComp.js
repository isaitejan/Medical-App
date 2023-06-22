import React from 'react';
import { editButtonClick, editButtonClickData } from '../store/medicalSlice';
import { useDispatch } from 'react-redux';
import { store } from '../store/store';
import { useNavigate } from 'react-router-dom';

export default function CardComp(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let handleEdit = ()=>{
        let {patientName,address,hospitalName,dateOfService,billAmount,billImage,billId} = props.bill_obj;
        let edit_data = {patientName, address, hospitalName, dateOfService, billAmount, billImage, billId};
        dispatch(editButtonClick(true));
        dispatch(editButtonClickData(edit_data));

        navigate('/EditForm')
    }

    return (
      <div>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <p className='card-text p-3'>{`Bill ID: ${props.bill_obj.billId}`}</p>
            <img
              src={props.bill_obj.billImage}
              alt='alt'
              style={{ maxWidth: 'auto', maxHeight: '100%'}}
              className='card-img p-3 justify-center'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{props.bill_obj.patientName}</h5>
              <p className='card-text'>
                {props.bill_obj.hospitalName} &nbsp;|&nbsp; 
                {props.bill_obj.address} &nbsp;|&nbsp;
                {props.bill_obj.dateOfService} &nbsp;|&nbsp;
                {props.bill_obj.billAmount}
              </p>
              {store.getState().medicalStore.editButton 
                ? null 
                : <button onClick={handleEdit} className='btn btn-secondary mt-4'>
                    Edit Information
                  </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
