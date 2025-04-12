'use client';

import { CloseOutlined } from '@ant-design/icons';

interface Props {
  onClose: () => void;
  isLarge?: boolean;
}

const ButtonCloseModal = ({ onClose, isLarge = false }: Props) => {
  return (
    <button
      type="button"
      onClick={() => onClose()}
      className="cursor-pointer absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-gray-400 transition-all hover:bg-gray-200 hover:text-gray-900"
    >
      <CloseOutlined className={`${isLarge ? 'text-2xl' : 'text-lg'}`} />
    </button>
  );
};

export default ButtonCloseModal;
