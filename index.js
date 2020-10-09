/* eslint-disable valid-typeof */
/* eslint-disable no-console */

function checkType(value, requiredType) {
  return typeof value === requiredType;
}

function nonEmptyString(value) {
  return value.length > 0;
}

function numberInRange(value, min, max) {
  return min <= value && value <= max;
}

// ====================================================================

function validateFiled(object, key, keyDescription) {
  const errorList = [];

  const objectKeyValue = object[key];

  keyDescription.forEach((descr) => {
    const argsArray = [objectKeyValue, ...descr.validationParams];
    if (!descr.validationRule.apply(null, argsArray)) {
      errorList.push({
        key,
        message: descr.validationMessage,
      });
    }
  });
  return errorList;
}

function validateObject(object, objectScheme) {
  const errorList = [];

  Object.keys(objectScheme).forEach((key) => {
    errorList.push(...validateFiled(object, key, objectScheme[key]));
  });

  return errorList;
}

// ====================================================================

function dumpErrors(errorList, validatedObject) {
  errorList.forEach((error) => {
    console.log(`Field: ${error.key}`);
    console.log(`Provided value: ${validatedObject[error.key]}`);
    console.log(`Message: ${error.message}`);
  });
}

// ====================================================================

const user = {
  firstName: "test",
  lastName: "test",
  age: 78,
  phone: "212412342134",
};

const userScheme = {
  firstName: [
    {
      /* validator: {
        params: ["string"],
        rule: checkType
      } */
      validationRule: checkType,
      validationParams: ["string"],
      validationMessage: "First Name not string",
    },
    {
      validationRule: nonEmptyString,
      validationParams: [],
      validationMessage: "First Name is empty",
    },
  ],
  lastName: [
    {
      validationRule: checkType,
      validationParams: ["string"],
      validationMessage: "Last Name not string",
    },
    {
      validationRule: nonEmptyString,
      validationParams: [],
      validationMessage: "Last Name is empty",
    },
  ],
  age: [
    {
      validationRule: checkType,
      validationParams: ["number"],
      validationMessage: "Age not number",
    },
    {
      validationRule: numberInRange,
      validationParams: [10, 56],
      validationMessage: `Age not in range between 10 and 56`,
    },
  ],
  phone: [
    {
      validationRule: checkType,
      validationParams: ["string"],
      validationMessage: "Phone not string",
    },
  ],
};

user.firstName = "";
user.age = 40;

// ====================================================================

const result = validateObject(user, userScheme);

if (result.length !== 0) {
  dumpErrors(result, user);
} else {
  console.log(`All is ok`);
}
