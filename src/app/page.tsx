import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>HomePage
    <Link href={'/about'}><h1>Goto About</h1></Link>
    <Link href={'/navbar'}><h1>Goto NavBar</h1></Link>
    <Link href={'/contact'}><h1>Contact Me</h1></Link>
    <Link href={'/about/projects'}>My Projects</Link>
    </>
  );
}
