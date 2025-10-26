'use client';
import React from 'react'

const Index = ({ title, imgSrc }: { title: any; imgSrc?: string }) => {
  return (
    <div className='bg-quaternary text-center text-xl font-bold text-white rounded-4xl shadow-2xl py-3 px-15 hover:opacity-75 flex flex-col items-center justify-center w-80 h-35'>
        {imgSrc && <img src={imgSrc} alt = "logo" className='w-8 h-8 mb-4' />}
        <span>{title}</span>
    </div>
  )
}

export default Index