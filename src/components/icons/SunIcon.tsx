import { SVGProps } from 'react';

export function SunIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M128 62a66 66 0 1 0 66 66a66.1 66.1 0 0 0-66-66Zm0 120a54 54 0 1 1 54-54a54 54 0 0 1-54 54Zm-6-146V16a6 6 0 0 1 12 0v20a6 6 0 0 1-12 0ZM44.6 53a5.9 5.9 0 1 1 8.4-8.4l14.2 14.1a6.1 6.1 0 0 1 0 8.5a5.9 5.9 0 0 1-4.3 1.7a5.8 5.8 0 0 1-4.2-1.7ZM42 128a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h20a6 6 0 0 1 6 6Zm25.2 60.8a6.1 6.1 0 0 1 0 8.5L53 211.4a5.9 5.9 0 0 1-8.4-8.4l14.1-14.2a6.1 6.1 0 0 1 8.5 0ZM134 220v20a6 6 0 0 1-12 0v-20a6 6 0 0 1 12 0Zm77.4-17a5.9 5.9 0 1 1-8.4 8.4l-14.2-14.1a6 6 0 0 1 8.5-8.5Zm34.6-75a6 6 0 0 1-6 6h-20a6 6 0 0 1 0-12h20a6 6 0 0 1 6 6Zm-34.6-83.4a5.8 5.8 0 0 1 0 8.4l-14.1 14.2a5.8 5.8 0 0 1-4.2 1.7a5.9 5.9 0 0 1-4.3-1.7a6.1 6.1 0 0 1 0-8.5L203 44.6a5.8 5.8 0 0 1 8.4 0Z"
      />
    </svg>
  );
}