import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

interface PanelContextProps {
  isMenu: boolean;
}

interface PanelProviderProps {
  active: PanelContextProps;
  setActive: Dispatch<SetStateAction<PanelContextProps>> | null;
}

export const PanelContext = createContext<PanelProviderProps>({
  active: {
    isMenu: false,
  },
  setActive: null,
});

export const PanelProvider: FC<PropsWithChildren> = ({ children }) => {
  const [active, setActive] = useState({
    isMenu: false,
    isAccount: false,
    isData: false,
    isSetting: false,
    isDoc: false,
  });

  return <PanelContext.Provider value={{ active, setActive }}>{children}</PanelContext.Provider>;
};

export const usePanel = () => useContext(PanelContext);
