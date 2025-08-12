// components/TikTokEmbed.tsx
'use client';

import { useEffect, useState }from 'react';

// This interface is to safely access the tiktok object on the window
declare global {
  interface Window {
    tiktok: {
      embed: {
        render: () => void;
      };
    };
  }
}

interface TikTokEmbedProps {
  url: string;
}

export default function TikTokEmbed({ url }: TikTokEmbedProps) {
  const [embedHtml, setEmbedHtml] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Effect to fetch the oEmbed HTML
  useEffect(() => {
    const fetchEmbed = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://www.tiktok.com/oembed?url=${url}`);
        if (!response.ok) {
          throw new Error('TikTok API response was not ok.');
        }
        const data = await response.json();
        setEmbedHtml(data.html);
      } catch (error) {
        console.error("Failed to fetch TikTok embed:", error);
        setEmbedHtml('<p class="text-red-500 text-center">Could not load video.</p>');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmbed();
  }, [url]);

  // NEW: Effect to load and trigger the TikTok script
  useEffect(() => {
    // Only run this logic if we have the embedHtml
    if (embedHtml) {
      // Check if the TikTok script is already on the page
      if (!window.tiktok) {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
      } else {
        // If the script is already loaded, just tell it to re-scan the page
        // for new embeds that we've just added.
        window.tiktok.embed.render();
      }
    }
  }, [embedHtml]); // This effect runs whenever the embedHtml changes

  if (isLoading) {
    return <div className="text-center p-4">Loading Video...</div>;
  }

  // This part remains the same
  return <div dangerouslySetInnerHTML={{ __html: embedHtml || '' }} />;
}