import { ReactNode } from 'react';

import MenuNavigation from '@/components/commons/MenuNavigation';
import MenuSearch from '@/components/commons/MenuSearch';

type Props = {
  children: ReactNode;
};

export default async function DasboardLayout({ children }: Props) {
  return (
    <div className="flex flex-col relative bg-[#f2f5fa] min-h-screen w-full justify-start pt-8">
      <main className='w-full min-h-screen pl-64'>
        <MenuSearch /> 
        {children}
      </main>
     <MenuNavigation />
    </div>
  );
}
