import React from 'react';
import { useForm } from 'react-hook-form';

import '../styles/Contact.css'

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='main container'>


      <h1 className='title'>Contact Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Name' {...register('firstName')} />
      <input placeholder='Email' {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input placeholder='Message' {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}
      <input type="submit" />
    </form>

 
  

<footer className='footer'>
    © 2022 Andrew Read  Email: andrew.read.dev@gmail.com
  </footer>
    </div>
  );
}
