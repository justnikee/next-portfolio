'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='flex items-center justify-center'>   
          <div className='flex flex-col gap-4 justify-center items-center max-w-screen-xl w-full p-4'>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{duration: 0.5}}
          className='text-[21px] leading-[38px] text-[#8892b0]'>Hi, Im The COOK,</motion.h3>
        <motion.h2
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
          opacity: 1,
          }}
          transition={{ duration: 0.6}}
          className='text-[#ccd6f6] text-[74px] font-bold leading-[75px]	uppercase'>Nikhil Thakur.</motion.h2>
        <motion.h2
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
          opacity: 1,
          }}
          transition={{ duration: 0.8}}
          className='text-[#8892b0] text-[74px] font-bold leading-[71px]	uppercase'>I &nbsp;
          <span className='bg-[rgba(255,255,255,.15)] px-4 rotate-3 hover:rotate-0 rounded-sm inline-block transition-[0.2s] hover:text-black hover:bg-white '>Cook</span> Things For The Web!</motion.h2>
        <motion.span
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
          opacity: 1,
          }}
          transition={{ duration: 1}}
  className='text-[18px] leading-[28px] text-[#8892b0] max-w-[600px] w-full block text-center mb-3 mt-3'>A frontend noobie developer with 1 year of experience in working with HTML,
          CSS, and JavaScript, eager to create visually appealing and
          interactive web pages, collaborate, and contribute to projects
          while embracing best practices.</motion.span>
        <motion.div
        initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
          opacity: 1,
          }}
          transition={{ duration: 1.2}}>
          <Link href="/contact" className="relative rounded">
          <span className='bg-[rgba(255,255,255,.3)] backdrop-blur	shadow-sm	text-black uppercase px-10 py-3 rounded text-lg h-full w-full z-10 relative  block'>Wanna Cook Website?</span>
          <span className='block absolute bg-gradient-to-r from-orange-400 to-yellow-200 h-full w-full top-0 right-0 z-0 translate-x-2 rounded translate-y-2'></span>
              </Link>
        </motion.div>
          </div>
    </div>
  )
}

export default Hero
