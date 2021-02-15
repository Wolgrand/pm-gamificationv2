import { NextComponentType } from 'next';
import React from 'react';

import { Container, Letters } from './styles';

interface AvatarProps {
  name: string;
  size?: number;
  fontSize?:number;
}

const Avatar= ({name, size, fontSize}:AvatarProps) => {

  const splitedString = name?.split(" ")
  const avatarLetters = splitedString.length > 1 ? splitedString[0].charAt(0).toUpperCase() + splitedString[1].charAt(0).toUpperCase() : splitedString[0].charAt(0).toUpperCase() + splitedString[0].charAt(1).toUpperCase()

  return (
   <Container style={{
    height:`${size ? size : '48'}px`,
    width:`${size ? size : '48'}px`,
    fontSize:`${fontSize ? fontSize : '1.5'}rem`
  }}>
     <Letters >{avatarLetters}</Letters>
   </Container>
    );
}

export default Avatar;
