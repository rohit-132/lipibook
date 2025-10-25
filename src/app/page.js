'use client'

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/CLOGIN');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center bg-white dark:bg-black">
        <button 
          onClick={handleLoginClick}
          className="bg-black text-amber-50 w-20 h-10 rounded-md hover:bg-gray-800 transition-colors"
        >
          Login
        </button>
      </main>
    </div>
  );
}