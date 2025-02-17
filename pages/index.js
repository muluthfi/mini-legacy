import Link from 'next/link';
import { useState } from 'react';

export async function getServerSideProps() {
  // Contoh data yang di-fetch dari server atau API
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}

export default function Home({ post }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-700">Welcome to Next.js with Tailwind</h1>
        <p className="text-gray-500 my-4">Server-Side Rendering Example</p>
        <div className="text-center">
          <Link href="/register" className="text-blue-500 hover:text-blue-700">
            Go to Register
          </Link>
          </div>
      </div>
    </div>
  );
}