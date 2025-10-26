'use client'
import React from 'react'



const PrincipalTitle = () => {
  return (
    <h1 className='text-6xl font-normal text-primary text-center' style={{ fontFamily: 'Acme, sans-serif' }}>
        Salt&Sugar
    </h1>
  )
}


const PrincipalText = () => {
    return (
        <p className='text-secondary text-center font-light text-3xl' style={{ fontFamily: 'Acme, sans-serif' }}>
            Sistema de gestión de pedidos y reservas
        </p>
    )
}


export {PrincipalTitle, PrincipalText}