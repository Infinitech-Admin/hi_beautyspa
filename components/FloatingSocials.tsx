'use client'

import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaViber, FaShareAlt } from 'react-icons/fa'

export default function FloatingSocials() {
  const [open, setOpen] = useState(false)

  const socials = [
    {
      icon: <FaFacebookF />,
      link: 'https://www.facebook.com/people/HI-BeautySPA/61564870212732/',
      bg: 'bg-[#1877F2]', // Facebook Blue
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/hibeautyspa888/',
      bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600', // Instagram gradient
    },
    {
      icon: <FaTiktok />,
      link: 'https://www.tiktok.com/@hibeautyspa888',
      bg: 'bg-black', // TikTok black
    },
    {
      icon: <FaViber />,
      link: 'viber://chat?number=%2B639684504504',
      bg: 'bg-[#7360F2]', // Viber purple
    },
  ]

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
        {socials.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${item.bg} text-white p-3 rounded-full shadow-lg hover:scale-110 transition`}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* MOBILE */}
      <div className="md:hidden fixed right-4 bottom-6 z-50 flex flex-col items-end gap-3">
        
        {/* Icons */}
        <div
          className={`flex flex-col gap-3 transition-all duration-300 ${
            open
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-5 pointer-events-none'
          }`}
        >
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${item.bg} text-white p-3 rounded-full shadow-lg`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#3D2817] text-white p-4 rounded-full shadow-lg"
        >
          <FaShareAlt />
        </button>
      </div>
    </>
  )
}
