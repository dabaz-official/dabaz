import Image from "next/image"
import React, { useContext, useRef, useState, useCallback } from "react"

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10">
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
        <source src="/assets/bg.mp4" type="video/mp4; codecs=hvc1;" />
        <source src="/assets/bg.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
        <Image src="/assets/logo.svg" width={128 / 3} height={128 / 3} alt="DabAZ Logo" />
      </div>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">DabAZ</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          Digital Craftsman
        </h2>
      </div>
      <div className={`flex-grow-0 pb-20 mb:pb-10 transition-all duration-1000 ${
        imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'
      }`}>
        <Image src="/assets/arrow-down.png" width={188 / 3} height={188 / 3} alt="scroll down" onLoad={handleImageLoaded} />
      </div>
    </div>
  )
}

export default Masthead
