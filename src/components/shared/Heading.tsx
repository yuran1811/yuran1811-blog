import { FC, PropsWithChildren } from 'react';

export const Heading: FC<PropsWithChildren> = ({ children }) => (
  <h1 className="p-6 text-center text-6xl font-bold leading-tight tracking-tighter sm:text-7xl md:text-8xl">
    {children}
  </h1>
);
