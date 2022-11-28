export const copyToClipboard = (text: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
  } catch (error) {
    console.error(error);
  }
};
