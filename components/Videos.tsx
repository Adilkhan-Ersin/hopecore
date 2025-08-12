import React from 'react';
import LazyTikTokEmbed from './LazyLoad';
import videos from '@/data/videos.json';
import Link from 'next/link';

export default function Videos() {
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
              <Link href="/core">
                <button className="bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] text-[var(--foreground)] font-semibold text-xs md:text-base leading-tight py-1.5 px-2 border border-[var(--foreground)] hover:border-transparent rounded-4xl mt-5">See more</button>
              </Link>
            </div>
          </div>
          <div className="mt-8 w-full">
            <div className="flex flex-col items-center md:flex-wrap md:justify-between md:flex-row">
              {videos.slice(0, 6).map((sosal) => (
                <div key={sosal.id} className="flex flex-col">
                  <LazyTikTokEmbed url={sosal.tiktokUrl} />
                </div>
              ))}
            </div>
          </div>
          <div className='cta'>
            <Link href="/core">
              <button type="button" className="bg-transparent hover:bg-[var(--foreground)] hover:text-[var(--background)] text-[var(--foreground)] font-semibold text-xs md:text-base leading-tight py-1.5 px-2 border border-[var(--foreground)] hover:border-transparent rounded-4xl mt-5">See more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}