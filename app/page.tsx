import Image from 'next/image'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
   <>
   <h1 className='text-black'>Welcome {session?.user?.name}</h1>
   <Link href="/users">User</Link>
   <ProductCard/>
   </>
  )
}
