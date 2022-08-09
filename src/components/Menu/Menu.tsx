import { usePanel } from '@/contexts';
import { MenuIcon } from '@cpns/icons';
import Sidebar from './Sidebar';

const Menu = () => {
  const { active, setActive } = usePanel();

  return (
    <div className="flexcenter relative">
      <MenuIcon />
      {active.isMenu && <Sidebar onClickOutside={() => setActive((s) => ({ ...s, isMenu: false }))} />}
    </div>
  );
};

export default Menu;
