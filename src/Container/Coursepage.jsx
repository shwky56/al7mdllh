import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { DataContext } from '../App';

export const Coursepage = () => {
  const {data, error, loading, setData} = useContext(DataContext)

  const  id = useParams()
  return (
    <>
    { data && <Div id={id.id} data={data}/>}
    </>
  )
}
const Div = ({id, data} ) =>
{
  return (
    <>
    <div className='text-[3rem]'>Course-page for 
      <span className='text-purple-700 text-[5rem] px-2'> 
        {data.at(id).title}
      </span> 
    </div>
    </>
  )
}