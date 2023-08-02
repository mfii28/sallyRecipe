import React from 'react'
import {FaHamburger, FaPizzaSlice} from 'react-icons/fa' 

import { GiAfrica, GiNoodles } from 'react-icons/gi' 
import { NavLink } from 'react-router-dom'

function Category() {
  return (
    <div className=' flex justify-center my-[2rem]'>
        <NavLink className=" flex flex-col justify-center items-center rounded-[50%] mr-[3rem] bg-gradient-to-r from-red-400 to-[orange] h-[4rem] w-[4rem]" to={"/cusinie/african"}>
            <GiAfrica className='text-[1.2rem]' />
            <h4 className='text-[0.6rem]'>Afican</h4>
        </NavLink>
        <NavLink className=" flex flex-col justify-center items-center rounded-[50%] mr-[3rem] bg-gradient-to-r from-red-400 to-[orange] h-[4rem] w-[4rem]" to={"/cusinie/italian"}>
            <FaPizzaSlice className='text-[1.2rem]' />
            <h4 className='text-[0.6rem]'>Italian</h4>
        </NavLink>
        <NavLink className=" flex flex-col justify-center items-center rounded-[50%] mr-[3rem] bg-gradient-to-r from-red-400 to-[orange] h-[4rem] w-[4rem]" to={"/cusinie/asian"}>
            <GiNoodles className='text-[1.2rem]' />
            <h4 className='text-[0.6rem]'>Asain</h4>
        </NavLink>
        <NavLink className=" flex flex-col justify-center items-center rounded-[50%] mr-[3rem] bg-gradient-to-r from-red-400 to-[orange] h-[4rem] w-[4rem]" to={"/cusinie/american"}>
            <FaHamburger className='text-[1.2rem]' />
            <h4 className='text-[0.6rem]'>American</h4>
        </NavLink>
    </div>
  )
}

export default Category