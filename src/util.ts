export const randomId = () => Date.now().toString();

export const partial = (fn: any, firstArg: any) => {
  return (...lastArgs: any) => {
    return fn(firstArg, ...lastArgs);
  };
};
