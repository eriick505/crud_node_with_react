const transformFieldsToBooleanFields = (field) => {
  return Object.keys(field).reduce((acc, item) => {
    acc[item] = Boolean(field[item]);

    return acc;
  }, {});
};

export const validateBodyFieldsExist = (fields: Object) => {
  const booleanFields = transformFieldsToBooleanFields(fields);

  const transformEachFieldToBoolean = Object.keys(booleanFields).map(
    (item) => booleanFields[item] === true ?? false
  );

  const isBodyFieldsValidy = transformEachFieldToBoolean.every(
    (field) => field
  );

  if (isBodyFieldsValidy) return { exist: true };

  const getRequiredFields = transformEachFieldToBoolean
    .map((field, index) => !field && Object.keys(booleanFields)[index])
    .filter((field) => field);

  return { exist: false, getRequiredFields };
};
