'use client'
import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LipiBookLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  const router = useRouter();

  const handleHome = () => {
    router.push('/commitee-home');
  };

    const handleForgetpassword = () => {
    router.push('/commitee-forgotpass');
  };

  return (
    <div className="min-h-screen bg-[#e8d7c3] flex flex-col">
        {/* Header */}
       <header className="px-4 py-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F5E6D3' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <Image
              src="/images/rgstc.png"
              alt="Play Icon"
              width={48}
              height={48}
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
          </div>
          <h1 className="text-sm sm:text-xl lg:text-2xl xl:text-3xl font-bold text-center flex-1 px-2 sm:px-4">
            RGSTC MUMBAI IN COLLABORATION WITH VIT, PUNE
          </h1>
          <Image
            src="/images/VIT.png"
            alt="Shield Icon"
            width={48}
            height={48}
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 sm:py-8 md:py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-6 sm:mb-8">
             <div className="inline-block">
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/images/lipibook.png"
                  alt="LipiBook Logo"
                  width={200}
                  height={80}
                  priority
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>

          {/* Login Section */}
          <div className="bg-[#e8d7c3]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#2c1810] tracking-wide">
              COMMITTEE LOGIN
            </h2>

           <div className="space-y-4 sm:space-y-5">
              <div>
                <input
                  type="email"
                  placeholder="COMMITTEE MAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  suppressHydrationWarning
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-white border border-[#b8a898] rounded text-sm sm:text-base focus:outline-none focus:border-[#8b4513] focus:ring-1 focus:ring-[#8b4513] placeholder-[#6b5d52] transition-all"
                />
              </div>
               <div>
                <input
                  type="password"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  suppressHydrationWarning
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-white border border-[#b8a898] rounded text-sm sm:text-base focus:outline-none focus:border-[#8b4513] focus:ring-1 focus:ring-[#8b4513] placeholder-[#6b5d52] transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={handleHome}
                  suppressHydrationWarning
                  className="w-full bg-black text-white py-3 sm:py-3.5 md:py-4 rounded text-sm sm:text-base md:text-lg font-medium hover:bg-[#1a1a1a] active:bg-[#000000] transition-colors duration-200 tracking-wide"
                >
                  SIGN IN
                </button>
              </div>


              <div className="text-center pt-2">
                <button 
                  onClick={handleForgetpassword}
                  suppressHydrationWarning
                  className="text-[#2c1810] text-sm sm:text-base md:text-lg hover:text-[#8b4513] hover:underline transition-colors duration-200"
                >
                  FORGOT PASSWORD?
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#e8d7c3] px-4 sm:px-6 py-4 sm:py-5 border-t border-[#d4c4b0]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1"></div>
          <p className="text-[#2c1810] text-xs sm:text-sm md:text-base lg:text-lg text-center flex-1">
            भारत इतिहास संशोधक मंडळ, पुणे | LipiBook
          </p>
          <div className="flex-1 flex justify-end">
            <button 
              suppressHydrationWarning
              className="text-[#5c3d2e] hover:text-[#8b4513] transition-colors duration-200"
            >
              <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}