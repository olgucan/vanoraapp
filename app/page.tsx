import Image from 'next/image'
import Link from 'next/link'
import { Nav } from './components/Nav'
import { Banner } from './components/Banner'
import { Iframe } from './components/Iframe'
import { Featured } from './components/Featured'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Banner/>
      <Featured />
      <Iframe></Iframe>
    </main>
  )
}
