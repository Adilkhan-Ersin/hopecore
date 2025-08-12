'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

// IMPORTANT: Store your actual password in Vercel Environment Variables
// For local development, you can set it here, but don't commit it to GitHub!
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'adok';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const [tiktokUrl, setTiktokUrl] = useState('');
  const [category, setCategory] = useState('hopecore');
  const [generatedJson, setGeneratedJson] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password.');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVideo = {
      // This is a simple way to generate a unique-ish ID.
      // For a real app, you'd use a more robust method.
      id: Date.now(), 
      tiktokUrl,
      category,
    };
    
    // Pretty-print the JSON with an indentation of 2 spaces
    const jsonString = JSON.stringify(newVideo, null, 2);
    setGeneratedJson(jsonString);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleLogin} className="p-8 w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-md mb-4"
          />
          <button type="submit" className="w-full bg-[var(--matte-color)] text-[var(--background)] py-2 rounded-md hover:scale-105 transition-transform">
            Login
          </button>
          {error && <p className="text-red-500 text-md mt-2 text-center">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
      <div className="flex flex-col justify-center h-screen w-screen p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add New Video</h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="tiktokUrl" className="block text-sm font-medium">TikTok URL</label>
            <input
              type="url"
              id="tiktokUrl"
              value={tiktokUrl}
              onChange={(e) => setTiktokUrl(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-[var(--foreground)] rounded-md"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-[var(--foreground)] text-[var(--foreground)] rounded-md"
            >
              <option className='bg-[var(--background)]' value="hopecore">Hopecore</option>
              <option className='bg-[var(--background)]' value="motivational">Motivational</option>
              <option className='bg-[var(--background)]' value="peace">Peace</option>
            </select>
          </div>
          <button type="submit" className="px-4 py-2 bg-[var(--green-color)] text-[var(--background)] rounded-md hover:scale-105 transition-transform">
            Generate JSON
          </button>
        </form>

        {generatedJson && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Copy this into `videos.json`:</h2>
            <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
              <code>
                {generatedJson},
              </code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}