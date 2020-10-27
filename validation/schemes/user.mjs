/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */

import { checkType, nonEmptyString, numberInRange } from "../rules/rules.mjs";

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

export { userScheme };
