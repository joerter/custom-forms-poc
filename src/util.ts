export const partial = (fn: any, firstArg: any) => {
  return (...lastArgs: any) => {
    return fn(firstArg, ...lastArgs);
  };
};
