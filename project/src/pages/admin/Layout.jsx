import React from 'react'
import AdminNavbar from '../../component/admin/AdminNavbar'
import AdminSidebar from '../../component/admin/AdminSidebar'
import {Outlet} from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import Loading from '../../component/Loading'

const Layout = () => {
  const {isadmin, fetchIsAdmin} = useAppContext()
  
  useEffect(()=>{
    fetchIsAdmin()
  },[])
  return isadmin ? (
    <>
    <AdminNavbar/>
    <div className='flex'>
        <AdminSidebar/>
        <div className='flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-auto'>
            <Outlet/>
        </div>
    </div>
    </>
  ) : <Loading/>
}

export default Layout
