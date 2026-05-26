import React from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
    let {register, handleSubmit,formState}=useForm()
    function collectFormData(formData)
    {
        console.log(formData);
    }
  return (
    <div className='border border-secondary mt-5 container p-5 rounded-5 border-3'>
      <form className='w-25 ms-auto me-auto' onSubmit={handleSubmit(collectFormData)}>
        <div className="mb-3">
            <label htmlFor="USERNAME" className="form-label">USERNAME</label>
            <input type="text" className="form-control" id="USERNAME" 
            {...register('USERNAME',{required:{value:true, message:"USERNAME IS REQUIRED"}})} />

            <div className='text-danger'>
                {formState.errors?.USERNAME?.message}
            </div>
            
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
    </div>
  )
}