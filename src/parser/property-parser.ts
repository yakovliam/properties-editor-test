import Property from "../types/property";

const parseJsonIntoProperties = (data: any): Property[] => {
  const properties: Property[] = Object.keys(data).map((key) => {
    const value = data[key];
    const property: Property = {
      key,
      value,
    };
    return property;
  });

  return properties;
};

export default parseJsonIntoProperties;
