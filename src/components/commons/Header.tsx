'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import TranslateDropdown from "./TranslateDropdown";
import MenuNoAuth from "./MenuNoAuth";

const Header = () => {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <header className="absolute top-0 z-[999] bg-transparent flex w-full p-10 2xl:px-20 items-center justify-between h-[51px]">
      <Link href="/" className="hover:opacity-80 text-3xl transition-opacity w-fit md:w-56">
        Logo
      </Link>
      <nav
        className={`hidden xl:flex flex-grow justify-center text-base xl:text-lg 2xl:text-xl font-light gap-10 ${pathname.startsWith('/dashboard/') ? 'text-black' : 'text-white'}`}
      >
        <span>Cuidadores</span>
        <span>Servicios</span>
        <span>¿Cómo funciona?</span>
        <span>Blog</span>
      </nav>
      <div className="flex items-center justify-end gap-5 w-fit md:w-56 2xl:w-96">
        <TranslateDropdown />
        <div
          className={`text-sm md:text-base flex items-center gap-4 font-light ${pathname.startsWith('/dashboard/') ? 'text-black' : 'text-white'}`}
        >
          <MenuNoAuth />
        </div>
      </div>
    </header>
  )
}

export default Header
