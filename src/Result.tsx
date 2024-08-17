import React from 'react';

const Result: React.FC = () => {
  const formData = JSON.parse(localStorage.getItem('formData') || '{}');

  return (
    <div className='flex items-center flex-col bg-zinc-300 h-screen'>
      <h2 className='text-center font-bold mt-10 text-[2rem] text-black py-4'>Submitted Data</h2>
      <p className='font-bold text-lg'>Email: {formData.email}</p>
      <p className='font-bold text-lg'>Username: {formData.username}</p>
      <p className='font-bold text-lg'>Password: {formData.password}</p>
    </div>
  );
};

export default Result;
