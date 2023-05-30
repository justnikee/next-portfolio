'use client'

import Image from 'next/image'
import React from 'react'
import image from '../../../public/pp.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import left from '../../../public/left.svg'

const About = () => {
    
    return (
      <AnimatePresence>
    <div className='flex relative flex-col justify-center gap-6 max-w-screen-xl p-4 w-full bg-gradient-to-r from-[rgba(248, 78, 95, 0.85)] to-[rgba(254, 190, 48, 0.6)] h-screen '>
          <motion.h2
          initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
              className='text-[32px] uppercase font-bold '>About Me</motion.h2>
          <div className='flex'>
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        whileInView={{
                            opacity: 1,
                        y:0
                        }}
                        exit={{opacity: 0, motionRotation: "auto"}}
                        transition={{delay: 0.5, ease: "linear",}}
                        className='w-1/2 text-[18px] leading-[28px] text-[#8892b0] max-w-[600px] block mb-3 mt-3'>Hello! My name is Nikhil, and I have a passion for creating captivating online
                  experiences. My journey in web development began in 2021 when I started learning the web dev.
                  Through hacking together features using HTML, CSS, and JavaScript,
                I gained valuable knowledge in front-end development.
                  Since then, I have had the privilege of working in diverse settings,
                  including an advertising agency, a startup, a large corporation, and a
                  student-led design studio. Currently, I am focused on developing accessible
                  and inclusive products and digital experiences at Upstatement, serving a
                  range of clients.Im excited to continue honing my skills and exploring new
                  possibilities in the ever-evolving field of web development.</motion.p>
                    <div className='w-1/2 flex justify-center items-center'>
                <Image
                  height={500}
                  width={300}
                  src={image}
                  loading='lazy'
              alt='proffile picture'>
              </Image> 
              </div>    
          </div>
          <Image src={left} loading='lazy' alt='gradient'
          className='absolute left-[-500px] top-0 h-full w-full' />

            </div>
            </AnimatePresence>
  )
}

export default About
