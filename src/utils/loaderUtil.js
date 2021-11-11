export const toggleLoader = (bool) => {
  if (
    window &&
    window.showGlobalLoader &&
    typeof window.showGlobalLoader === "function"
  ) {
    window.showGlobalLoader(bool);
  }
};
