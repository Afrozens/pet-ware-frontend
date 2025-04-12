'use client';

import { useState } from 'react';


const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return {
    onOpen,
    onClose,
    isOpen,
  };
};

export default useOpen;
