type MatchFunction = (value: any) => boolean;
type ReplaceFunction = (value: any) => any;

export const deepFindAndReplace = (obj: any, matchFn: MatchFunction, replaceFn: ReplaceFunction): any => {
  const replaceRecursive = (value: any): any => {
    if (Array.isArray(value)) {
      return matchFn(value) ? replaceFn(value) : value.map(replaceRecursive);
    }
    if (value !== null && typeof value === "object") {
      const updatedObject: any = {};
      for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          updatedObject[key] = replaceRecursive(value[key]);
        }
      }
      if (matchFn(value)) {
        return replaceFn(value);
      }
      return updatedObject;
    }
    return value;
  };
  
  return replaceRecursive(obj);
};