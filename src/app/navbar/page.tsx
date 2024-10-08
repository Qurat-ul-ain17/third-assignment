import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div>NavBar
      <Link href={'/about'}><h1>Goto About</h1></Link>
       <Link href={'/contact'}><h1>Contact Me</h1></Link>
       <Link href={'/about/projects'}>My Projects</Link>
       <Link href={'/'}><h1>Goto HomePage</h1></Link>
    </div>
  )
}

export default NavBar
