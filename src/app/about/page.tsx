import Link from 'next/link'
import React from 'react'

function AboutPage() {
  return (
    <>AboutPage
        <Link href={'/navbar'}><h1>Goto NavBar</h1></Link>
        <Link href={'/contact'}><h1>Contact Me</h1></Link>
        <Link href={'/about/projects'}>My Projects</Link>
        <Link href={'/'}><h1>Goto HomePage</h1></Link>
    </>
  )
}

export default AboutPage
