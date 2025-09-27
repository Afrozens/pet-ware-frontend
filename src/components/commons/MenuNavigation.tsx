'use client';

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BankOutlined, DashboardOutlined, FilePdfOutlined, MessageOutlined, ScheduleOutlined, UsergroupAddOutlined, UserOutlined } from "@ant-design/icons";
import { List } from "@/models/commons";


const MenuNavigation = () => {
  const pathname = usePathname();
  const settingList: List[] = [
    {
      name: 'Settings',
      icon: DashboardOutlined,
      route: '/dashboard/pepe'
    },
    {
      name: 'Documentation',
      icon: FilePdfOutlined,
      route: '/dashboard/profile'
    },
  ]

  const menuList: List[] = [
    {
      name: 'Dashboard',
      icon: DashboardOutlined,
      route: '/dashboard/hosting'
    },
    {
      name: 'Professional profile',
      icon: UserOutlined,
      route: '/dashboard/profile'
    },
    {
      name: 'Payment',
      icon: BankOutlined,
      route: '/dashboard/profile'
    },
    {
      name: 'History Client',
      icon: UsergroupAddOutlined,
      route: '/dashboard/profile'
    },
    {
      name: 'Conversations',
      icon: MessageOutlined,
      route: '/dashboard/profile'
    },
    {
      name: 'Appointments',
      icon: ScheduleOutlined,
      route: '/dashboard/profile'
    }
  ]
  return (
    <div className="flex flex-col bg-[#f2f5fa] min-h-screen w-full justify-start pt-20">
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200  ">
          
          {/* title menu icon */}
          <div className="flex justify-center items-center gap-4 px-2 my-5 mb-12">
            <Image src={'/logotype.svg'} alt="icon svg pet" className="rotate-[4.7rad]" width={32} height={32} />
            <h3 className="text-lg font-semibold text-gray-600 capitalize">Pet Ware</h3>
          </div>

            <ul className="space-y-2">
              <span className="pl-2 uppercase text-xl font-semibold">menu</span>
                {menuList.map((list, index) => (
                  <li className={index === 0 ? 'mt-5' : index === (menuList.length - 1) ? 'mb-10' : ''}>
                      <Link href={list.route} className={`${pathname === list.route ? 'bg-success-primary text-white hover:opacity-90' : 'text-black hover:bg-gray-100'}  flex items-center p-2 text-base font-normal rounded-lg group`}>
                          <list.icon />
                          <span className="ml-3">{list.name}</span>
                      </Link>
                  </li>
                ))}
            </ul>
            <ul className="space-y-2 ">
              <span className="pl-2 uppercase text-lg font-semibold">settings</span>
                {settingList.map((list, index) => (
                  <li className={index === 0 ? 'mt-5' : ''}>
                      <Link href={list.route} className={`${pathname === list.route ? 'bg-success-primary text-white hover:opacity-90' : 'text-black hover:bg-gray-100'}  flex items-center p-2 text-base font-normal rounded-lg group`}>
                          <list.icon />
                          <span className="ml-3">{list.name}</span>
                      </Link>
                  </li>
                ))}
            </ul>
        </div>

      </aside>
    </div>
  )
}

export default MenuNavigation
