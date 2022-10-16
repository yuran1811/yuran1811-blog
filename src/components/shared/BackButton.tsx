import { BackIcon } from '@cpns/icons';
import { BASE_URL } from '@shared/constants';

export const BackButton = ({ router }) => (
  <BackIcon
    className="text-6xl md:text-7xl"
    onClick={() => {
      if (window.history.length < 2) {
        window.location.href = BASE_URL;
        return;
      }

      router?.back();
    }}
  />
);
