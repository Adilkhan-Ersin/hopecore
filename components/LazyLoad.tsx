'use client';

import { useState, useEffect, useRef } from 'react';
import TikTokEmbed from './TikTokEmbed'; // Import your original component

interface LazyTikTokEmbedProps {
  url: string;
}

export default function LazyTikTokEmbed({ url }: LazyTikTokEmbedProps) {
  const [isInView, setIsInView] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      // Fallback for older browsers or server-side rendering
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the placeholder is intersecting with the viewport
        if (entry.isIntersecting) {
          setIsInView(true);
          // Stop observing once it's visible to save resources
          if (placeholderRef.current) {
            observer.unobserve(placeholderRef.current);
          }
        }
      },
      {
        // Start loading when the placeholder is 200px away from the viewport
        rootMargin: '200px', 
      }
    );

    const placeholderNode = placeholderRef.current;
    if (placeholderNode) {
      observer.observe(placeholderNode);
    }

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      if (placeholderNode) {
        observer.unobserve(placeholderNode);
      }
    };
  }, []);

  // This placeholder is crucial! It reserves space for the video,
  // preventing the page layout from jumping around when the video loads.
  return (
    <div ref={placeholderRef} style={{ minHeight: '500px' }}>
      {isInView ? <TikTokEmbed url={url} /> : <div>{/* Placeholder content, can be a spinner or just empty */}</div>}
    </div>
  );
}