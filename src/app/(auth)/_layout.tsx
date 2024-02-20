import React, { ReactNode } from 'react'

const Layout = ({children}:{children :React.ReactNode}) => {
  return (
    <div className='auth'>{children}</div>
  )
}

export default Layout;