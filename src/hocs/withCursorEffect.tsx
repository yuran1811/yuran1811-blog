import { useStore } from '@/store';
import { NextPage } from 'next';

interface CursorProps {
  cursorType?: string;
  cursorStatus?: string;
}

const withCursorEffect = <K,>(WrappedComponent: any, { cursorType, cursorStatus }: CursorProps) => {
  const currentCursor = useStore((s) => s.currentCursor);

  const onMouseOver = () => {
    currentCursor?.setAttribute('cursor-type', cursorType);
    currentCursor?.setAttribute('cursor-status', cursorStatus);
  };
  const onMouseLeave = () => {
    currentCursor?.setAttribute('cursor-type', '');
    currentCursor?.setAttribute('cursor-status', '');
  };

  const WithCursorEffectComponent: NextPage<K> = (props) => {
    return <WrappedComponent {...props} />;
  };

  WithCursorEffectComponent.getInitialProps = WrappedComponent.getInitialProps;

  return WithCursorEffectComponent;
};

export default withCursorEffect;
