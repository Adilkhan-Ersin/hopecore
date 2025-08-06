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
      <div className="w-full h-20 mt-14 flex items-center justify-center">
        <p className="text-center">Might fuck around and realize that it doesn&apos;t have to make sense to anybody but me</p>
      </div>
      <div className="flex flex-col mt-16 justify-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">Videos</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum</p>
        </div>
        <div className="mt-8">
          <div className="flex flex-col items-center gap-4">
            {navsocial.map((sosal) => (
              <div key={sosal.name} className="flex flex-col">
                <ReactPlayer src={sosal.href} controls />
                <p className='pt-2'>{sosal.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button className="bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] text-[var(--foreground)] font-semibold text-xs leading-tight py-1.5 px-2 border border-[var(--foreground)] hover:border-transparent rounded-4xl mt-5 ms-2">See more</button>
        </div>
      </div>
    </section>
  );
}