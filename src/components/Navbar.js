import React from 'react'
import { HiMenu } from 'react-icons/hi'
import { IoIosLogOut } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function Navbar({ sidebarStatus, sidebar, user }) {
  const navigate = useNavigate();

  const handleLogOut=()=>{
    navigate('/login');
    localStorage.clear()
  }
  return (
    <div className='flex h-16 w-full bg-gray-50 mb-2'>
      <div class="flex px-2 justify-start items-center w-full">
        {!sidebarStatus &&
          <HiMenu fontSize={40} className="cursor-pointer text-red-600" onClick={() => sidebar(true)} />
        }
        <input className='flex-0' type='text' />
      </div>

      <div className='flex gap-2 items-center'>
        {user && (<>
          <span className='font-semibold text-lg'> {user.given_name}</span>
        </>)
        }
        <IoIosLogOut  className='text-red-500 text-lg cursor-pointer' onClick={handleLogOut}/>
      </div>
    </div>
  )
}

export default Navbar