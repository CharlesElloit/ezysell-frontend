const updateObject = (oldObject, newUpdatedProperties) => {
  return {
    ...oldObject,
    ...newUpdatedProperties
  };
};

export default updateObject;
