'use client'
import React from 'react'

import { PrincipalTitle, PrincipalText } from "@/components/atoms/text/Index";


const Index = () => {
  return (
    <div className='h-screen overflow-hidden'>
      <div>
        <img src="/logo.png" alt="Logo" className="w-20 h-auto mx-auto mt-6 mb-4" />
      </div>
      <div className='mb-4'>
        <PrincipalTitle />
      </div>
      <div className='mb-4'>
        <PrincipalText />
      </div>
    </div>
  )
}

export default Index