import { ReactNode } from 'react';

import MenuNavigation from '@/components/commons/MenuNavigation';

type Props = {
  children: ReactNode;
};

export default async function DasboardLayout({ children }: Props) {
  return (
    <div className="flex flex-col bg-[#f2f5fa] min-h-screen w-full justify-start pt-8">
        {/* <MenuSearch /> */}
        {children}
     <MenuNavigation />
    </div>
  );
}
