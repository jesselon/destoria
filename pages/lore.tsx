import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import s from 'styles'
import FirstFrame from 'components/Lore/FirstFrame'
import LastFrame from 'components/Lore/LastFrame'
import dynamic from 'next/dynamic'
import CharactersCarousel from 'components/Home/CharactersCarousel'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Destoria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirstFrame />
      <LastFrame />
      <main>
      </main>
    </div>
  )
}

export default Home