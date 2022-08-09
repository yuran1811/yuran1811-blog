import { FC, PropsWithChildren } from 'react';

export const PostLable: FC<PropsWithChildren> = ({ children }) => {
  return <div className="rounded-full py-2 px-4 text-center">{children}</div>;
};
