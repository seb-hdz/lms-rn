export const twJoin = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(" ").trim();
};
