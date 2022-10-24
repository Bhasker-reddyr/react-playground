import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import {RiHomeFill} from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom';
import {IoIosArrowForward} from 'react-icons/io'
import logo from '../assets/logo.png'

function Sidebar({ sidebarStatus, sidebar, user }) {
  const categories = [
    { 'id': 'Food', 'name': 'Food', 'image': 'https://random.imagecdn.app/52/52' },
    { 'id': 'movies', 'name': 'Movies', 'image': 'https://random.imagecdn.app/50/50' },
    { 'id': 'tech', 'name': 'Tech', 'image': 'https://random.imagecdn.app/51/51' },
  ];
  const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
  const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold transition-all duration-200 ease-in-out capitalize';
  console.log('user', user);
  return (
    <>
      <div className="flex flex-col m-3 justify-center">
        <div className='cursor-pointer' >
          <img src={logo} alt='logo'  onClick={() => sidebar(false)} />
          {/* <AiFillCloseCircle fontSize={20} className="float-right text-red-600 cursor-pointer" onClick={() => sidebar(false)} /> */}
        </div>
        <div className="flex flex-col gap-5 ">
        {/* <NavLink
            to="/"
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={sidebar}
          >
            <RiHomeFill />
            Home
          </NavLink> */}
          <h3 className="mt-2 text-base 2xl:text-xl">Discover cateogries</h3>
          {
            categories.map((category, idx) => (<>
              <div className='flex flex-row gap-3 items-center cursor-pointer' key={category.id}>
                <img key={category.idx} className='rounded-full w-8 h-8' src={category.image} alt='cat' />
                <span key={category.name}> {category.name} </span>
              </div>
            </>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Sidebar
