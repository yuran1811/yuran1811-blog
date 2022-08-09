import { urlForImage } from '@utils/sanity';
import Image from 'next/image';

export const Avatar = ({ name, picture }) => (
  <div className="flex items-center">
    <div className="relative mr-4 h-12 w-12">
      <Image
        src={urlForImage(picture).height(96).width(96).fit('crop').url()}
        layout="fill"
        className="rounded-full"
        alt={name}
      />
    </div>
    <div className="text-2xl font-bold md:text-3xl">{name}</div>
  </div>
);
