export const jn = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(" ").trim();
};
