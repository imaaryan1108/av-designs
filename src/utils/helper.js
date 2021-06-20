// pxToRem
export const pxToRem = (px) => `${px / 22.5}rem`;

// pxToVw
export const pxToVw = (px) =>
  `${(100 / document.documentElement.clientWidth) * px}vw`;

// pxToVh
export const pxToVh = (px) =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;