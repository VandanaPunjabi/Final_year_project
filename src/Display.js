import React from 'react'

export default function Display() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-secondary'>
      <div className='form_container p-5 rounded bg-white'>
        <form>
          <div className='mb-2'>
            <label htmlFor='mobileno'><b>Select State</b></label>
            <input type='text' placeholder='Select State' className='form-control' />
          </div>

          <div className='mb-2'>
            <label htmlFor='mobileno'><b>Select District</b></label>
            <input type='text' placeholder='Select District' className='form-control' />
          </div>

          <div className='mb-2'>
            <label htmlFor='mobileno'><b>Select Taluka</b></label>
            <input type='text' placeholder='Select Taluka' className='form-control' />
          </div>
          <div className='d-grid'>
            <button className='btn btn-primary'>Submit</button>

          </div>
        </form>
      </div>
    </div>
  )
}
