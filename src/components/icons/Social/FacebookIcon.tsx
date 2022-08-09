import { SVGProps } from 'react';

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <circle cx="128" cy="128" r="96" fill="#2196f3" opacity=".4" />
      <path
        fill="currentColor"
        d="M232 128a104 104 0 1 0-104 104a104.1 104.1 0 0 0 104-104Zm-96 87.6V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32.1 32.1 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.6a88 88 0 1 1 16 0Z"
      />
    </svg>
  );
}
