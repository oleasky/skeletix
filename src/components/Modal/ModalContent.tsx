import React from 'react'
import { Container } from '../Container'

interface ModalWindowProps {
    className?: string;
    children: React.ReactNode;
}

const compId = 'modal';

export const ModalContent = ({className='', children}:ModalWindowProps) => {
  return (
    <Container id="modal" className={`bg-white p-fluid-sm rounded-lg shadow-lg ${compId}__window ${className}`}>
        {children}
    </Container>
  )
}
