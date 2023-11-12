import React from 'react'
import UserTable from './userTable';
import Link from 'next/link';

interface Props{
    searchParams:{ sortOrder:string }
}
 
const UserPage = async ({ searchParams:{ sortOrder }}:Props)=>{
    console.log(sortOrder)
    
  return (
    <>
        <h1 className="text-center text-black">User Page</h1>
        <Link href="/users/new" className='btn'>New User</Link>
        <UserTable sortOrder={sortOrder} />
    </>
  )
}
        
export default UserPage

