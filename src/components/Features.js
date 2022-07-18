import React from 'react'
import './Features.css'

export default function Features() {
  return (
    <div className='container-0'>
      {/* <div className='item' id='item-1'>
        Welcome
        <br />
        <br />
        <br />
        <strong>HR</strong>
        <p className='dashbord'>Dashbord</p>
      </div> */}

      <div className='container-1'>
        <div className='item' id='item-2'>New Joinings</div>
        <div className='item' id='item-3'>Sticky Notes</div>

        <div className='item' id='item-6'>Holiday</div>
        <div className='item' id='item-7'>Birthday & Anniversary</div>
      </div>

      <div className='container-2'>
        <div className='item' id='item-9' >pending Reviews</div>
      </div>





      <div className='container-3'>
        <div className='item' id='item-4'>On Leave</div>
        <div className='item' id='item-8'>Leave Application status</div>
        <div className='item' id='item-10' >Pending Actions</div>
      </div>

      <div className='container-4'>
        <div className='item' id='item-5'>Employee of the month</div>
        <div className='item' id='item-11'>Announcement</div>
      </div>

    </div>


  )
}

