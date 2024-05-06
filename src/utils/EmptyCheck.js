export const isEmpty = (value) => {
    if (
      value === null ||
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0) ||
      (typeof value === "object" && Object.keys(value).length === 0)
    ) {
      return true;
    }
  
    return false;
  };