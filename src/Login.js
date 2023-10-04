import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
function Login() {

    const validationSchema = Yup.object({
        mobileno: Yup.string().required('Required'),
        password: Yup.string()
          .required('Required'),
        
      })

    const formik = useFormik({
        initialValues: {
            mobileno: '',
            password: '',
          
        },
        onSubmit:values=>{
            console.log('Form data',values)
        },
        validationSchema
    })

    console.log('Form values',formik.values)

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-secondary'>
        <div className='form_container p-5 rounded bg-white'>
        <form onSubmit={formik.handleSubmit}>
                <h3 className='text-center'>Sign In</h3>
                <div className='mb-2'>
                    <label htmlFor='mobileno'><b>Mobile No</b></label>
                    <input type='text' placeholder='Mobile No'
                     name='mobileno' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobileno}

                    className='form-control'
                    
                    />

{formik.touched.mobileno && formik.errors.mobileno ? (
          <div className='error'>{formik.errors.mobileno}</div>
        ) : null}

                </div>

                <div className='mb-2'>  
                    <label htmlFor='password'><b>Password</b></label>
                    <input type='password' placeholder='Enter Password' 
                     name='password' 
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     value={formik.values.password}
 
                    className='form-control'/>
                </div>

                <div className='mb-2'>
                    <input type='checkbox' className='custom-control-checkbox' id='check'/>
                    <label htmlFor='check' className='custom-input-label ms-2'>
                        Remember me
                    </label>
                </div>
                
        
                <div className='d-grid'>
                    <button  type='submit'
                    className='btn btn-primary'>Sign In</button>
                </div>
                
                
                <p className='text-end mt-2'>
               Don't have a account? <Link to='/' className='ms-2'>Sign up</Link>
                </p>
         </form>
        </div>
    </div>
  )
}

export default Login