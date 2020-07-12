import Head from 'next/head';
import NavBar from "../components/navbar";
import Landing from "../components/landing";
import Advantage from "../components/advantage";
import FlashCard from "../components/flashcard";
import Products from "../components/products";
import Contact from "../components/contact";
import Copyright from "../components/copyright";
import { useState } from 'react';

export default function Home() {

  const [isEn,setIsEn] = useState(true); 

  function chooseEn(){
    var root = $(":root");
    root.css("--Great-Vibes","Great Vibes");
    root.css("--Playfair","Playfair Display");
    root.css("--Source-Sans","Source Sans Pro");
    setIsEn(true);
  }

  function chooseCh(){
    var root = $(":root");
    root.css("--Great-Vibes","ChineseTitle");
    root.css("--Playfair","serif");
    root.css("--Source-Sans","ChineseFont");
    setIsEn(false);
  }

  return (
    <div className="container">
      <Head>
        <title>{isEn ? "Anhui Isun":"安徽以恒"}</title>
        <link rel="icon" href="/logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet"></link>
        <script src="/jquery-3.5.1.min.js"></script>
      </Head>

      <main>
        <NavBar chooseCh={chooseCh} chooseEn={chooseEn} isEn={isEn} />
        <Landing isEn={isEn} />
        <Advantage isEn={isEn} />
        <FlashCard isEn={isEn} />
        <Products isEn={isEn} />
        <Contact isEn={isEn} />
        <Copyright />
      </main>

      <footer>
         
      </footer>

     
    </div>
  )
}
