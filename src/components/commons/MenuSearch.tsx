'use client';

import FieldInput from "@/components/commons/fields/FieldInput"
import { QuestionMarkCircleIcon, BellIcon } from "@heroicons/react/24/outline";
import MenuAuth from "./MenuAuth";
import { SearchOutlined } from "@ant-design/icons";
import { userStub } from "@/stub/optionStub";


const MenuSearch = () => {
  return (
 <div className="flex justify-between items-center"> 
      <div className="w-full flex justify-between items-center gap-4">
          <FieldInput id={"SearchMenu"} label={""}  withIcon Icon={SearchOutlined} classAditional="pl-4 w-full lg:max-w-xs flex-none xl:max-w-lg 2xl:max-w-xl"/>
          
          <div className="flex-1 flex pr-8 items-center justify-end gap-2">
            <button className="btn-ghost bg-gray-50 border border-gray-300 rounded-full p-2">
              <QuestionMarkCircleIcon className="w-6 h-6 2xl:w-8 2xl:h-8" />
            </button>
            <button className="btn-ghost bg-gray-50 border border-gray-300 rounded-full p-2">
              <BellIcon className="w-6 h-6 2xl:w-8 2xl:h-8" />
            </button>
            <MenuAuth user={userStub} />
          </div>
      </div>
    </div>
  )
}

export default MenuSearch
