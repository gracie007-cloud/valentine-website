'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter()
  const [yesButtonPos, setYesButtonPos] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleYesHover = () => {
    const randomX = Math.random() * 500 - 500
    const randomY = Math.random() * 500 - 500
    setYesButtonPos({ x: randomX, y: randomY })
  }

  const handleNoClick = () => {
    router.push('/no')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7f8] via-[#f8f4f8] to-[#f8f7f8] flex items-center justify-center">
      <div className="text-center">
        {/* Title */}

        {/* Subtitle */}
        <p className="text-5xl text-white mb-12 bg-[#db99fa] p-20 rounded-4xl zalando">Will you be my Valentine?</p>

        {/* Buttons Container */}
        <div className="relative h-40 flex items-center justify-center gap-8">
          {/* No Button */}
          <button
            onClick={handleNoClick}
            className="px-12 py-3 bg-[#db99fa] hover:bg-[#945dad] text-white font-bold text-lg rounded-full transition-all duration-200 transform hover:scale-105 cursor-pointer"
          >
            No ❤️
          </button>

          {/* Yes Button */}
          <button
            onMouseEnter={handleYesHover}
            style={{
              transform: `translate(${yesButtonPos.x}px, ${yesButtonPos.y}px)`,
            }}
            className="px-12 py-3 bg-[#db99fa] hover:bg-[#945dad] text-white font-bold text-lg rounded-full transition-all duration-200 transform hover:scale-105 relative cursor-pointer"
          >
            Yes 💖
          </button>
        </div>

       
      {/* Floating Hearts Background */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                // animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.3,
              }}
            >
              💜
            </div>
          ))}
        </div>
      )}


      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(100vh) scale(1); opacity: 0.3; }
          100% { transform: translateY(-100px) scale(1.5); opacity: 0; }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>



      </div>
    </div>
  )
}
