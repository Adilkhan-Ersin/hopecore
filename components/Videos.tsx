import React from 'react';
import ReactPlayer from 'react-player';

export default function Videos() {
  const navsocial = [
    { name: 'Hopecore', href: 'https://www.tiktok.com/@issography/video/7493199017757936942?is_from_webapp=1&sender_device=pc&web_id=7466880244239762949' },
    { name: 'Motivational', href: 'https://www.tiktok.com/@just4motivation1/video/7445623525458611478?is_from_webapp=1&sender_device=pc&web_id=7466880244239762949' },
    { name: 'Peace', href: 'https://www.tiktok.com/@jaxfilms_/video/7524217579137797431?is_from_webapp=1&sender_device=pc&web_id=7466880244239762949' },
  ];

  return (
    <section className="w-full">
      <div className="w-full mt-14 flex items-center justify-center">
        <p className="text-center max-w-[300px] md:max-w-[600px] md:text-4xl">Might fuck around and realize that it doesn&apos;t have to make sense to anybody but me</p>
      </div>
      <div className='flex items-center justify-center'>
        <div className="flex flex-col mt-16 w-full md:max-w-[1280px] justify-center">
          <div className='flex justify-between items-end'>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl md:text-5xl">Videos</h1>
              <p className="text-sm md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum</p>
            </div>
            <div className='cta-web'>
              <button className="bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] text-[var(--foreground)] font-semibold text-xs md:text-base leading-tight py-1.5 px-2 border border-[var(--foreground)] hover:border-transparent rounded-4xl mt-5">See more</button>
            </div>
          </div>
          <div className="mt-8 w-full">
            <div className="flex flex-col items-center gap-6 video-grid lg:grid lg:grid-cols-3!">
              {navsocial.map((sosal) => (
                <div key={sosal.name} className="flex flex-col w-[100%] h-[600px]">
                  <ReactPlayer src={sosal.href} controls width="100%" height="100%"/>
                  <p className='pt-2'>{sosal.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='cta'>
            <button className="bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] text-[var(--foreground)] font-semibold text-xs md:text-base leading-tight py-1.5 px-2 border border-[var(--foreground)] hover:border-transparent rounded-4xl mt-5">See more</button>
          </div>
        </div>
      </div>
    </section>
  );
}