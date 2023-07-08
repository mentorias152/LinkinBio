"use client";
import Image from 'next/image'
import Link from 'next/link'
import avatar from './public/avatar.jpg'
import fIcon from './public/facebook.svg'
import iIcon from './public/instagram.svg'
import gIcon from './public/github.svg'
import bgAyaka from './public/bg-ayaka-wide.jpg'

import './css/page.css'

import { useForm } from '@formspree/react'
import React from 'react'

export default function Home() {
  const [state, handleSubmit] = useForm("mbjenldr");

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-12">
        <Image id='bg-ayaka' className='
          h-screen
          fixed
          top-0
          -z-10
          object-cover
        '
        src={bgAyaka} alt={'Background'}/>
      <div className='flex flex-col items-center justify-between z-1'>
        <div className='flex flex-col items-center justify-center relative
         w-32 h-32 md:w-36 md:h-36 lg:w-42 lg:h-42 xl:w-42 xl:h-42
        rounded-full
        border-2 border-white shadow-[0_2px_8px_0_rgba(28,32,93,0.5)]'>
          <Image className='rounded-full overflow-hidden object-cover'
            fill
            src={avatar}
            alt='avatar'
          />
        </div>
        <span className='m-4 px-8 py-1
        text-center
        text-sm lg:text-lg md:text-md xl:text-xl
        bg-[#fffc] rounded-full
        z-1'>
          Phạm Gia Huy
        </span>
        <div className='m-1 px-8 py-2 w-3/4
        text-center
        text-md
        bg-[#fffc] rounded-xl
        z-1'>
          Freshly graduated student of HCM University of Science with passion in coding, responsibility in work and willing to learn attitude.
          Good English and excellent logical thinking, research and time management skills. Try to improve day by day with some side projects.
        </div>
      </div>
      <ul className='box-border list-none py-8'>
        <li><Link href='https://www.facebook.com/lullaby.for.ur.soul/' target='_blank'>
          <div>
            <Image
              className='mr-2 w-5 h-5 xl:w-7 xl:h-7'
              src={fIcon}
              alt='Facebook logo' />
          </div>
          Facebook</Link></li>
        <li><Link href='https://www.instagram.com/mentoriassssss/' target='_blank'>
          <div>
            <Image
              className='mr-2 w-5 h-5 xl:w-7 xl:h-7'
              src={iIcon}
              alt='Instagram logo' />
          </div>
          Instagram</Link></li>
        <li><Link href='https://github.com/mentorias152' target='_blank'>
          <div>
            <Image
              className='mr-2 w-5 h-5 xl:w-7 xl:h-7'
              src={gIcon}
              alt='Github logo' />
          </div>
          Github</Link></li>
      </ul>
      {state.succeeded ?
        <div className='m-4 p-8 w-full h-64
        flex flex-col items-center justify-center
        text-center
        text-3xl
        bg-[#fffc] rounded-xl'>
          Thank you for contacting me
        </div> :
        <div
          className='m-4 p-8 w-full
        flex flex-col items-center justify-center
        text-center
        text-md
        bg-[#fffc] rounded-xl'>
          <span className='text-xl xl:text-3xl'
          >Contact me</span>
          <form onSubmit={handleSubmit}
          className='w-full'>
            <input
              id='email'
              name='message'
              required
              maxLength={128}
              type='text'
              placeholder='Your email'
              className='bg-white text-black outline-none border-2 border-white rounded-2xl px-8 mt-8 w-full h-12'
            />
            <textarea
              id='message'
              name='message'
              required
              placeholder='Message'
              className='bg-white text-black outline-none border-2 border-white rounded-2xl px-8 py-4 mt-4 w-full h-48'
            />
            {state.submitting ?
              <button disabled
              className='bg-black text-white rounded-2xl px-8 py-2 mt-4'>
                Submitting...
              </button> :
              <button
                type='submit'
                className='bg-black text-white rounded-2xl px-8 py-2 mt-4'>
                Submit
              </button>}
          </form>
        </div>}
    </main>
  )
}
