import React from 'react';
import DarkVeil from './DarkBg';

export default function Hero() {
  return (
    <section className="relative" id='hero'>
      <div className="w-screen object-cover absolute top-0 h-[600px] left-0 z-[-1] ">
        <DarkVeil/>
      </div>
      <div className='w-full flex flex-col items-center relative'>
        <div className="h-[300px] pt-10 flex flex-col items-center justify-center mb-10 text-[var(--foreground-color)] text-center">
          <h1 className="text-2xl">This is my place to find peace, <br></br>answers and motivation.</h1>
          <p className="mt-5 ">stay pure, stay goated, i luv you</p>
        </div>
        <div className="w-screen relative ">
          <video className="w-full object-cover" autoPlay playsInline loop muted width={1980} height={1080}>
            <source src="/vid/porche.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}