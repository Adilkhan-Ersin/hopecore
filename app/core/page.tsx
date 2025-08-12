// app/page.tsx
'use client';

import { useState } from 'react';
import videos from '@/data/videos.json';
// Make sure you're importing the lazy loader, NOT react-player
import LazyTikTokEmbed from '@/components/LazyLoad'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = ['all', 'hopecore', 'motivational', 'peace'];

export default function HomePage() {
  const [filter, setFilter] = useState('all');

  const filteredVideos = videos.filter(video => 
    filter === 'all' ? true : video.category === filter
  );

  return (
    <div className="">
      <Navbar />
      <section className='w-full flex justify-center'>
        <div className='max-w-[1280px] w-full mt-10'>
          <h1 className="text-4xl font-bold mb-4">Videos</h1>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full md:text-sm text-xs font-semibold ${filter === category ? 'bg-[var(--green-color)] text-[var(--background)]' : 'bg-[var(--matte-color)] text-[var(--background)]'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="flex flex-wrap justify-between">
            {filteredVideos.map((video) => (
              <div key={video.id} className="flex flex-col">
                <div>
                  <p className="text-2xl text-[var(--foreground)] capitalize my-2">{video.category}</p>
                </div>
                {/* THIS IS THE CORRECT USAGE. NO REACT-PLAYER. */}
                <LazyTikTokEmbed url={video.tiktokUrl} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}