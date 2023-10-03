import { cloneElement } from "react";

export const jn = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(" ").trim();
};

export const renderMultiple = (count: number, render: JSX.Element) => {
  const elements = Array(count).fill(0);

  return elements.map((_, index) => cloneElement(render, { key: index }));
};
