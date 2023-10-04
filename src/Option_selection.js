import React from 'react';
import AsyncSelect from 'react-select/async';

function Option_selection() {
        const options = [
            {value:"only veg" , label: "Only Veg"},
            {value:"veg and egg" , label: "Veg and Eggs"},
            {value:"veg and non-veg" , label: "Veg and Non-Veg"}, 
        ]
    
    const handleChange = (selectedOtion) => {
        console.log("handlechange", selectedOtion);
    };

    const loadOptions = (searchValue, callback) => {
         setTimeout(() => {
            const filteredOptions = options.filter((option) => 
            option.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
            );
            console.log('loadoptions' , searchValue , filteredOptions);
            callback(filteredOptions);
         },2000)
    }
  return (
        <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-secondary'>
        <div className='form_container p-5 rounded bg-white'>

        <form>
        
        <div className='mb-2'>
        <label htmlFor='fname text-dark'><b>Date</b></label>
        <input type='date' placeholder='date'  className='form-control'/>
      </div>
        
      <div className='mb-2'>
        <label htmlFor='fname text-dark'><b>Food Type</b></label>
        <AsyncSelect loadOptions={loadOptions} onChange={handleChange} isMulti />
      </div>

        <div className='mb-2'>
                <label htmlFor='lname'><b>Total Number of Counts</b></label>
                <input type='text' placeholder=''  className='form-control'/>
            </div>

        </form>
        <div className='d-grid'>
                <button className='btn btn-primary'>Submit</button>
            </div>


        </div>
        </div>
  )
}

export default Option_selection