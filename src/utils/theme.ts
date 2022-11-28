interface StyleType {
  [key: string]: {
    bg: string;
    color: string;
  };
}

export const hashTagStyles: StyleType = {
  comparasion: { bg: 'bg-hashtag-1', color: 'text-white' },
  cpp: { bg: 'bg-hashtag-2', color: 'text-white' },
  customization: { bg: 'bg-hashtag-3', color: 'text-white' },
  terminal: { bg: 'bg-hashtag-4', color: 'text-white' },
  'keyboard-shortcut': { bg: 'bg-hashtag-5', color: 'text-white' },
  'sublime-text': { bg: 'bg-hashtag-6', color: 'text-white' },
  intro: { bg: 'bg-hashtag-7', color: 'text-white' },
  library: { bg: 'bg-hashtag-8', color: 'text-black' },
  canvas: { bg: 'bg-hashtag-10', color: 'text-black' },

  'vs-code': { bg: 'bg-hashtag-vscode', color: 'text-white' },
  technology: { bg: 'bg-hashtag-tech', color: 'text-white' },
  js: { bg: 'bg-hashtag-js', color: 'text-white' },

  unknown: { bg: 'bg-[#eaeaea]', color: 'text-[#565656]' },
};

export const labelStyles: StyleType = {
  dev: { bg: 'bg-zinc-800', color: 'text-zinc-100' },
  moment: { bg: 'bg-rose-300', color: 'text-rose-800' },
  pts: { bg: 'bg-sky-800', color: 'text-sky-300' },
  tools: { bg: 'bg-teal-300', color: 'text-teal-600' },
  discover: { bg: 'bg-yellow-300', color: 'text-yellow-800' },

  unknown: { bg: 'bg-[#eaeaea]', color: 'text-[#565656]' },
};
