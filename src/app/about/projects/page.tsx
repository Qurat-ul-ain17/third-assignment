import Link from 'next/link'
import React from 'react'

const MyProjects = () => {
  return (
    <div>
      <Link href={'/about'}><h1>Goto About</h1></Link>
      <Link href={'/navbar'}><h1>Goto NavBar</h1></Link>
      <Link href={'/contact'}><h1>Contact Me</h1></Link>
      <Link href={'/'}><h1>Goto HomePage</h1></Link>

    </div>
  )
}

export default MyProjects
