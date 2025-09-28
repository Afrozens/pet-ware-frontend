'use client'

import FieldInput from "@/components/commons/fields/FieldInput"
import { QuestionMarkCircleIcon, BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import  getSplitName from "@/utils/getSplitName";
import AvatarGenerate from "@/components/commons/AvatarGenerate";

const HostingPage = () => {

  const { color } = getSplitName("Eris");

  return (
    <div className="flex justify-between items-center pl-72 2xl:pl-[450px]"> 
      <div className="max-w-lg w-full"> 
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="flex flex-row items-center gap-4">
          <FieldInput id={"SearchMenu"} label={""} classAditional="max-w-none flex-none 2xl:w-[800px]"/>
          <div className="flex-1 flex flex-row items-center gap-2 ml-200">
            <button className="btn-ghost bg-white rounded-full"><QuestionMarkCircleIcon className="w-6 h-6 2xl:w-8 2xl:h-8" /></button>
            <button className="btn-ghost bg-white rounded-full"><BellIcon className="w-6 h-6 2xl:w-8 2xl:h-8" /></button>
            <AvatarGenerate size={48} name={"Eris"} userId={"777"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostingPage

