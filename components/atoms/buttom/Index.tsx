//rafce y tab
//como estamos usando approuter entonces escribimos use client
'use client';

import React from 'react'

const Index = ({ label }: { label: string }) => {
  return (
  <button
  className='h-10 w-50 bg-primary rounded-3xl text-white font-bold text-2xl shadow-2xl hover:opacity-50 hover:cursor-pointer transition delay-15 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
  >
    {label}
    </button>
  )
};

export default Index;