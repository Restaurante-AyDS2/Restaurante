'use client';
import React from 'react';
import Button from '@/components/atoms/buttom/Index';

const Index = () => {
  return (
    <div className="flex justify-center gap-50 absolute top-[82%] left-0 w-full">
      <Button label="Iniciar sesión" />
      <Button label="Registrarse" />
    </div>
  );
};

export default Index;