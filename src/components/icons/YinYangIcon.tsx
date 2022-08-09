import { SVGProps } from 'react';

export function YinYangIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M140 80a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm92 48A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-92 48a12 12 0 1 0-12 12a12 12 0 0 0 12-12Zm32-92a44 44 0 0 0-44-44a88 88 0 0 0-46.9 162.4A51.1 51.1 0 0 1 76 180a52 52 0 0 1 52-52a44 44 0 0 0 44-44Z"
      />
    </svg>
  );
}
