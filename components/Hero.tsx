import React from 'react';
import DarkVeil from './DarkBg';

export default function Hero() {
  return (
    <section className="relative" id='hero'>
      <div className="w-full object-cover absolute top-0 h-[300px] md:h-[600px] left-0 z-[-1] ">
        <DarkVeil/>
      </div>
      <div className='w-full flex flex-col items-center relative'>
        <div className="h-[300px] pt-10 flex flex-col items-center justify-center mb-10 text-[var(--foreground-color)] text-center">
          <h1 className="text-2xl max-w-[330px] md:text-6xl md:max-w-[850px]">When the World Feels Heavy… Let Hope Lift You</h1>
          <p className="mt-5 md:text-2xl">stay pure, stay goated, i luv you</p>
        </div>
        <div className="w-full relative flex items-center justify-center">
          <video className="md:w-[80%] object-cover rounded-xl md:rounded-4xl" autoPlay playsInline loop muted width={1980} height={1080}>
            <source src="/vid/TheStart.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}