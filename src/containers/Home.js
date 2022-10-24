import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Pins from "./Pins";

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
  useEffect(() => {
    setUser(userInfo);
  }, []);
  const handleLogOut = () => {
    navigate('/login');
  }

  return (
    <>
      <div className="bg-white flex flex-row justify-start min-h-screen">
        {toggleSidebar &&
          <div className='md:relative absolute w-[35vw] md:w-[15vw] bg-gray-50 p-2 z-50 h-screen'>
            <Sidebar user={user} sidebarStatus={toggleSidebar} sidebar={setToggleSidebar} />
          </div>
        }
        <div className='relative bg-white-50 flex flex-col h-screen w-full m-2'>
          <Navbar user={user} sidebarStatus={toggleSidebar} sidebar={setToggleSidebar} />
          <Pins user={user} ></Pins>
        </div>
      </div>
    </>
  )
}

export default Home