import { SVGProps } from 'react';

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M67.8 92.6L25.4 128l42.4 35.4a5.9 5.9 0 0 1 .8 8.4A5.8 5.8 0 0 1 64 174a5.9 5.9 0 0 1-3.8-1.4l-48-40a5.9 5.9 0 0 1 0-9.2l48-40a6 6 0 0 1 7.6 9.2Zm176 30.8l-48-40a6 6 0 0 0-7.6 9.2l42.4 35.4l-42.4 35.4a5.9 5.9 0 0 0-.8 8.4a5.8 5.8 0 0 0 4.6 2.2a5.9 5.9 0 0 0 3.8-1.4l48-40a5.9 5.9 0 0 0 0-9.2Zm-81.7-89a5.9 5.9 0 0 0-7.7 3.5l-64 176a5.9 5.9 0 0 0 3.6 7.7a4.5 4.5 0 0 0 2 .4a5.8 5.8 0 0 0 5.6-3.9l64-176a5.9 5.9 0 0 0-3.5-7.7Z"
      />
    </svg>
  );
}
