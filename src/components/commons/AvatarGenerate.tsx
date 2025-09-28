'use client';

import Image from 'next/image';


import { useQuery } from '@tanstack/react-query';
import getSplitName from '@/utils/getSplitName';
import FileService from '@/services/FileService';


interface Props {
  size: number;
  name: string;
  userId: string;
  defaultSrc?: string;
  roundedFull?: boolean;
  src?: string | null;
}

const AvatarGenerate = ({
  userId,
  size = 64,
  src = undefined,
  roundedFull = true,
  defaultSrc = undefined,
  name,
}: Props) => {
  const { color, nameSplit } = getSplitName(name);
  const fileService = new FileService();
  const { data, isLoading } = useQuery({
    queryKey: [`image-${src}`, src],
    queryFn: async () => {
      if (src) {
        return await fileService.fileGet(src);
      }
    },
    staleTime: 1000 * 60,
    gcTime: 1000 * 60,
    refetchOnWindowFocus: false,
  });
  return (
    <>
      {data || defaultSrc ? (
        <>
          <div
            style={{ height: size, width: size }}
            className={`relative ${isLoading ? 'blur-md' : ''} transition ${roundedFull ? 'rounded-full' : 'rounded-md'}`}
          >
            <Image
              src={data ?? String(defaultSrc)}
              alt={`mage profile of ${name}`}
              width={size}
              height={size}
              className={`image-height w-full ${roundedFull ? 'rounded-full' : 'rounded-lg'} object-cover object-center`}
            />
          </div>
        </>
      ) : (
        <>
          <div
            style={{ backgroundColor: color, height: size, width: size }}
            className={`relative flex ${isLoading ? 'blur-md' : ''} justify-center ${roundedFull ? 'rounded-full' : 'rounded-md'}`}
          >
            <p className="flex items-center justify-center text-xl font-bold text-white">
              {nameSplit.toUpperCase()}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default AvatarGenerate;