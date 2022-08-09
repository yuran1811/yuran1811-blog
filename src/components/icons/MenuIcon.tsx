import { usePanel } from '@/contexts';
import { DivProps } from '@/shared';
import c from 'classnames';
import { FC } from 'react';

const beforeStyle = (active: boolean) =>
  `before:transition-all before:content-[""] before:absolute before:w-full before:h-[4px] before:top-[10px] before:left-0 before:bg-current ${
    active ? 'before:rotate-[135deg] before:top-[18px]' : ''
  }`;
const afterStyle = (active: boolean) =>
  `after:transition-all after:content-[""] after:absolute after:w-full after:h-[4px] after:bottom-[10px] after:left-0 after:bg-current ${
    active ? 'after:rotate-[-135deg] after:bottom-[18px]' : ''
  }`;

export const MenuIcon: FC<DivProps> = (props) => {
  const { className, ...otherProps } = props;

  const { active, setActive } = usePanel();

  const onClickHandle = () => setActive && setActive((s) => ({ ...s, isMenu: !s.isMenu }));

  return (
    <div
      {...otherProps}
      className={c(
        className,
        beforeStyle(active.isMenu),
        afterStyle(active.isMenu),
        'flexcenter flexcentercol relative h-10 min-h-[40px] w-10 min-w-[40px] cursor-pointer transition-all'
      )}
      onClick={onClickHandle}
    />
  );
};
