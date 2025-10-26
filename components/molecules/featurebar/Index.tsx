'use client';
import FeatureTitle from '@/components/atoms/featuretitle/Index'
import React from 'react'

const Index = () => {
  return <nav className='w-full h-35 bg-terciary flex items-center justify-around absolute top-[55%] left-0 -translate-y-[40%]'>
        <FeatureTitle imgSrc="/logov1.png" title={<><span>Reserva con</span><br />antelación</>} />
        <FeatureTitle imgSrc="/logov2.png" title={<><span>Evita hacer filas</span><br />extensas</>} />
        <FeatureTitle imgSrc="/logov3.png" title={<><span>Cena a la hora que</span><br />desees</>} />
    </nav>
}

export default Index