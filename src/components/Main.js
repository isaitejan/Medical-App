import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../store/store';
import CardComp from './CardComp';

export default function Main() {
  return (
    <div className='container mt-4'>
        <button className='btn btn-primary'><Link to='/AddBill' style={{textDecoration:'none',color:'white'}}>Click to Add Bills</Link></button>
        <div className='col-md-8 offset-2'>
          <h2 className="mt-4">Bills Dashboard</h2>
            {store.getState().medicalStore.bills.length !== 0 ? (
                store.getState().medicalStore.bills.map((bill, index)=>{
                    return <CardComp key={index} bill_obj={bill}/>
                })
            ):<p>No bills uploaded yet!</p>}
        </div>
    </div>
  )
}
