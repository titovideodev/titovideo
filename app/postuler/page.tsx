"use client"
import Breadcrumb from '@/components/Common/Breadcrumb';
import PostForm from '@/components/Postuler';
import React from 'react';

const postuler = () => {
  return (
    <div>
        <Breadcrumb pageName={'Postuler'} description={"Réjoignez nous dès maintenant"} />
        <PostForm/>
      
    </div>
  );
}

export default postuler;
