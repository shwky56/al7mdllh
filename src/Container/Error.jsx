import React from 'react'

export const Error = ({error}) => {
    console.log(error);
  return (
    <div className='container mx-auto text-red-600 text-[6=rem]'>
    <p>error</p>
        {/* {error} */}
    </div>
  );
}
