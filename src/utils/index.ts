const colorCreatorFn = (colors: string[], defaultIndex = 0) => {
  let index = defaultIndex;

  return () => colors[index++ % colors.length];
};

export { colorCreatorFn };
