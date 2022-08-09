import { SVGProps } from 'react';

export function BackIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M228 200a4 4 0 0 1-8 0a92.1 92.1 0 0 0-92-92H41.7l41.1 41.2a3.9 3.9 0 0 1 0 5.6a3.9 3.9 0 0 1-5.6 0l-48-48a3.9 3.9 0 0 1 0-5.6l48-48a4 4 0 0 1 5.6 5.6L41.7 100H128a100.2 100.2 0 0 1 100 100Z"
      />
    </svg>
  );
}
