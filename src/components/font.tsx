// fonts
import { Cinzel,Bodoni_Moda,Prata,Montserrat, Playfair_Display } from 'next/font/google'

const Playfair = Playfair_Display({ subsets: ['latin'] })
const Cinze = Cinzel({subsets:["latin"]});
const Bodoni = Bodoni_Moda({ subsets: ['latin'] })
const Prat = Prata({subsets:["latin"],weight:"400"});
const Montser= Montserrat ({subsets:["latin"]});




import React from 'react'

const Font = () => {
  return (
    <div className=' px-5 max-w-screen-2xl mx-auto flex justify-center md:justify-between space-x-4 items-center  bg-black w-full h-[122px] flex-wrap '>
      <h1 className={`${Playfair.className}  text-white text-2xl md:text-4xl`}>VERCASE</h1>
      <h1 className={`${Cinze.className} text-white  text-2xl md:text-4xl`}>ZARA</h1>
      <h1 className={`${Bodoni.className} text-white  text-2xl md:text-4xl`}>GUCCI</h1>
      <h1 className={`${Prat.className} text-white  text-2xl md:text-4xl`}>PRADA</h1>
      <h1 className={`${Montser.className} text-white text-2xl md:text-4xl`}>Calvin Kleim</h1>
    </div>
  )
}

export default Font

