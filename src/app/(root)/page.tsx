import { UserButton } from '@clerk/nextjs';
import React from 'react'

const Home = () => {
  return (
    <div className="h-screen">
      Home
    <UserButton afterSignOutUrl='/' />
  </div>
  )
}

export default Home;