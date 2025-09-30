'use client';

import FieldInput from "@/components/commons/fields/FieldInput"
import { QuestionMarkCircleIcon, BellIcon } from "@heroicons/react/24/outline";
import MenuAuth from "./MenuAuth";
import { SearchOutlined } from "@ant-design/icons";


const MenuSearch = () => {
  return (
 <div className="flex justify-between items-center pl-72"> 
      <div className="w-full flex justify-between items-center gap-4">
          <FieldInput id={"SearchMenu"} label={""}  withIcon Icon={SearchOutlined} classAditional="w-full lg:max-w-xs flex-none xl:max-w-lg 2xl:max-w-xl"/>
          
          <div className="flex-1 flex pr-8 items-center justify-end gap-2">
            <button className="btn-ghost bg-gray-50 border border-gray-300 rounded-full p-2">
              <QuestionMarkCircleIcon className="w-6 h-6 2xl:w-8 2xl:h-8" />
            </button>
            <button className="btn-ghost bg-gray-50 border border-gray-300 rounded-full p-2">
              <BellIcon className="w-6 h-6 2xl:w-8 2xl:h-8" />
            </button>
            <MenuAuth user={{
              id: 'asdua89s789sd79a7s9d',
              first_name: 'jesus',
              last_name: 'chacon',
              email: 'jesus@example.com',
              description: '',
              type_document: 'DNI',
              phone_number: "",
              roles_id: '1',
              active: true,
              address: '',
              document: '',
              verified_at: null,
              deleted_at: null,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
              role: {
                name: 'admin',
                id: 'asdasd123123',
                description: 'regular user',
                created_at: "",
                deleted_at: null
              }
            }} />
          </div>
      </div>
    </div>
  )
}

export default MenuSearch
