import React from 'react'
import ThemeButton from './ThemeButton'
import Link from 'next/link'
const Nav = () => {
  return (
    <div>
         <header className='py-6'>
            <nav className='container flex items-center justify-between'>
              <ul className='flex gap-6'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
              </ul>

              <ThemeButton />
            </nav>
          </header>
    </div>
  )
}

export default Nav;