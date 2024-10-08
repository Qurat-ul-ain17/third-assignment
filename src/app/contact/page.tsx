import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <>Contact Me
    <Link href={'/navbar'}><h1>Goto NavBar</h1></Link>
    <Link href={'/about'}><h1>Goto About</h1></Link>
    <Link href={'/about/projects'}>My Projects</Link>
    <Link href={'/'}><h1>Goto HomePage</h1></Link>
    </>
  )
}

export default Contact