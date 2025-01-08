import React from 'react'
import { Container } from '../Container'

interface ModalWindowProps {
    className?: string;
    children: React.ReactNode;
}

const compId = 'modal';

export const ModalWindow = ({className='', children}:ModalWindowProps) => {
  return (
    <Container id="modal" className={`bg-red-500 ${compId}__window ${className}`}>
        {children}
    </Container>
  )
}
