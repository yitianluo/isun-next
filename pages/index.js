import Head from 'next/head';
import NavBar from "../components/navbar";
import Landing from "../components/landing";
import Advantage from "../components/advantage";
import FlashCard from "../components/flashcard";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Anhui Isun</title>
        <link rel="icon" href="/logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <NavBar />
        <Landing />
        <Advantage />
        <FlashCard />
      </main>

      <footer>
  
      </footer>

     
    </div>
  )
}
