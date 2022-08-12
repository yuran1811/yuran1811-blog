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

  'vs-code': { bg: 'bg-hashtag-vscode', color: 'text-white' },
  technology: { bg: 'bg-hashtag-tech', color: 'text-white' },
  js: { bg: 'bg-hashtag-js', color: 'text-white' },
};

export const labelStyles: StyleType = {
  dev: { bg: 'bg-zinc-800', color: 'text-zinc-100' },
  moment: { bg: 'bg-rose-300', color: 'text-rose-800' },
  pts: { bg: 'bg-sky-800', color: 'text-sky-300' },
  tools: { bg: 'bg-teal-300', color: 'text-teal-600' },
};
