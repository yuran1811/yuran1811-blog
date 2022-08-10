import { MoonIcon, SunIcon } from '@cpns/icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ChangeTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flexcenter text-6xl" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' && <MoonIcon />}
      {theme === 'light' && <SunIcon />}
    </div>
  );
};
