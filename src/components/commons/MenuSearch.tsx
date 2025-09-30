'use client';

import { useState, useEffect } from "react";
import FieldInput from "@/components/commons/fields/FieldInput"
import { QuestionMarkCircleIcon, BellIcon } from "@heroicons/react/24/outline";
import MenuAuth from "./MenuAuth";
import { SearchOutlined } from "@ant-design/icons";
import { userStub } from "@/stub/optionStub";
import moment from 'moment'
import useOpen from "@/hooks/useOpen";
import StructuredModal from "../modal/StructureModal";

const MenuSearch = () => {
  const { isOpen, onClose, onOpen } = useOpen();
  const [searchQuery, setSearchQuery] = useState("");

  // Efecto para el shortcut Ctrl + K
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        onOpen();
      }
      
      // Cerrar con Escape
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onOpen, onClose]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buscando:", searchQuery);
    // Aquí puedes agregar la lógica de búsqueda
    onClose();
  };

  return (
    <>
      <div className="flex justify-between items-center"> 
        <div className="w-full flex justify-between items-center gap-4">
          <span className="text-xl pl-4 font-medium">
            {moment().format('MMMM Do YYYY')}
          </span>

          <div className="flex-1 flex pr-8 items-center justify-end gap-2">
            <div className="relative cursor-pointer hover:opacity-70 transition-all">
              <div onClick={onOpen} className="cursor-pointer">
                <FieldInput
                  id="searchTrigger"
                  label=""
                  value=""
                  readOnly
                  withIcon={false}
                  placeholder="Search..."
                  classAditional="w-64 cursor-pointer bg-gray-50 border-gray-300 hover:bg-gray-100 transition-colors"
                />
              </div>
              <span onClick={onOpen} className="absolute top-1/2 transform -translate-y-1/2 left-1/2 text-sm font-light bg-primary-500 text-black px-2 py-1 rounded-md border border-gray-400">
                ⌘K
              </span>
            </div>
            
            <button className="btn-ghost bg-gray-50 border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors">
              <QuestionMarkCircleIcon className="w-6 h-6 2xl:w-8 2xl:h-8" />
            </button>
            <button className="btn-ghost bg-gray-50 border border-gray-300 rounded-full p-2 hover:bg-gray-100 transition-colors">
              <BellIcon className="w-6 h-6 2xl:w-8 2xl:h-8" />
            </button>
            <MenuAuth user={userStub} />
          </div>
        </div>
      </div>

      <StructuredModal 
        open={isOpen} 
        onClose={onClose}
        classAditional="top-28 mt-4 mx-auto max-w-2xl w-full"
      >
        <div className="bg-white rounded-lg mt-6 shadow-xl border border-gray-200 p-2">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <div className="flex-1">
              <FieldInput
                id="globalSearch"
                label=""
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                withIcon
                Icon={SearchOutlined}
                placeholder="Search pets, services, locations..."
                classAditional="border-0 shadow-none focus:ring-0 text-lg"
                autoFocus
              />
            </div>
            {/* Shortcut visual en el modal */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <kbd className="px-2 py-1 text-xs font-mono bg-gray-100 border border-gray-300 rounded">
                Esc
              </kbd>
              <span>to close</span>
            </div>
          </form>
          
          {/* Sugerencias rápidas (opcional) */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {['Dog walking', 'Veterinary', 'Pet grooming', 'Cat care'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setSearchQuery(suggestion)}
                  className="px-3 py-1.5 text-sm bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </StructuredModal>
    </>
  );
};

export default MenuSearch;