import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className="container mx-auto px-5">{children}</div>
);
