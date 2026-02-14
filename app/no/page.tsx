"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NoPage() {
    const [mounted, setMounted] = useState(false)
     useEffect(() => {
        setMounted(true)
      }, [])
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7e9f89a] via-[#f3d9f56b] to-[#f4eff56b] flex items-center justify-center">
      <div className="text-center">
           <div className="relative w-64 h-72 mx-auto mb-6">
            <Image
              src="/giphy.gif"
              alt="Valentine GIF"
              fill
              className=""
              unoptimized={true}
              priority
            />
          </div>
        <div className="bg-[#eeb3f3a1]/50 p-20 rounded-4xl mb-12 text-[#c279c9] border-[#eeb3f3a1] border-4">
          {/* Message */}
          <h1 className="text-5xl md:text-6xl font-bold  mb-6 delius-regular">
            I knew you'd say yes! 💖
          </h1>

          <p className="text-2xl delius-regular">Happy Valentine's Day, my love! 💕</p>
        </div>
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
  );
}
