'use client'
import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LipiBookForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  const router = useRouter();

  const handleBackToLogin = () => {
    router.push('/commitee-resetpass');
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#E8D5BA' }}>
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
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
                 {/* Logo */}
          <div className="text-center mb-6 sm:mb-8">
             <div className="inline-block">
              <div className="flex items-center justify-center gap-4">
                <Image
                  src="/images/lipibook.png"
                  alt="LipiBook Logo"
                  width={300}
                  height={120}
                  priority
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>

        {!isSubmitted ? (
          // Forgot Password Form
          <div className="w-full max-w-md">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">COMMITTEE LOGIN SYSTEM</h2>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-8">FORGOT PASSWORD</h3>

            <div className="mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="COMMITTEE MAIL"
                className="w-full px-4 py-3 text-sm sm:text-base outline-none"
                style={{ 
                  backgroundColor: '#F5E6D3', 
                  border: '1px solid #D4A574',
                  color: '#000000'
                }}
              />
            </div>

            <div className="flex justify-center">
              <button 
                onClick={handleSubmit}
                className="bg-black text-white px-8 sm:px-12 py-2.5 text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors"
              >
                RESET PASS
              </button>
            </div>
          </div>
        ) : (
          // Success Message
          <div className="w-full max-w-md text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-8">COMMITTEE LOGIN SYSTEM</h2>
            
            <p className="text-lg sm:text-xl italic mb-8" style={{ fontFamily: 'Georgia, serif' }}>
              DEAR COMMITTEE RESET LINK SENT<br />SUCCESSFULLY.
            </p>

            <div className="flex justify-center">
              <button 
                onClick={handleBackToLogin}
                className="bg-black text-white px-8 sm:px-12 py-2.5 text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors"
              >
                BACK TO LOGIN
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#e8d7c3] px-4 sm:px-6 py-4 sm:py-5 border-t border-[#d4c4b0]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex-1"></div>
          <p className="text-[#2c1810] text-xs sm:text-sm md:text-base lg:text-lg text-center flex-1">
            भारत इतिहास संशोधक मंडळ, पुणे | LipiBook
          </p>
          <div className="flex-1 flex justify-end">
            <button className="text-[#5c3d2e] hover:text-[#8b4513] transition-colors duration-200">
              <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LipiBookForgotPassword;