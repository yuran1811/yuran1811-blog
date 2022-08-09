import { SVGProps } from 'react';

export function StackIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m12 110.9l112 64a7.8 7.8 0 0 0 8 0l112-64a8 8 0 0 0 0-13.8l-112-64a7.7 7.7 0 0 0-8 0l-112 64a8 8 0 0 0 0 13.8Zm116-61.7l95.9 54.8l-95.9 54.8L32.1 104ZM246.9 140a7.9 7.9 0 0 1-2.9 10.9l-112 64a7.8 7.8 0 0 1-8 0l-112-64a8 8 0 0 1 8-13.8l108 61.7l108-61.7a7.9 7.9 0 0 1 10.9 2.9Z"
      />
    </svg>
  );
}
