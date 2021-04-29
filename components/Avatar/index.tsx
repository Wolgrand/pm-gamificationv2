import { NextComponentType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useAuth } from '../../hooks/auth';

import { Container, Letters } from './styles';

interface AvatarProps {
  name: string;
  size?: number;
  fontSize?:number;
}

const Avatar= ({name, size, fontSize}:AvatarProps) => {

  const router = useRouter()
  const splitedString = name?.split(" ")
  const avatarLetters = splitedString.length > 1 ? splitedString[0].charAt(0).toUpperCase() + splitedString[1].charAt(0).toUpperCase() : splitedString[0].charAt(0).toUpperCase() + splitedString[0].charAt(1).toUpperCase()

  const handleProfileLink = () => {
    router.push('/profile')
  }

  return (
   <Container className="bg-gray-800 text-center rounded-full text-color-gray-100"
    onClick={()=>handleProfileLink()} style={{
    height:`${size ? size : '48'}px`,
    width:`${size ? size : '48'}px`,
    fontSize:`${fontSize ? fontSize : '1.5'}rem`,
    cursor: 'pointer'
  }}>
     <Letters className="mx-0 my-auto align-middle" >{avatarLetters}</Letters>
   </Container>
    );
}

export default Avatar;
