/* eslint-disable import/extensions */
/* eslint-disable valid-typeof */
/* eslint-disable no-console */

import { johnDoe } from "./model/users.mjs";
import { userScheme } from "./validation/schemes/user.mjs";
import { validateObject } from "./validator/validator.mjs";

function dumpErrors(errorList, validatedObject) {
  errorList.forEach((error) => {
    console.log(`Field: ${error.key}`);
    console.log(`Provided value: ${validatedObject[error.key]}`);
    console.log(`Message: ${error.message}`);
  });
}

const result = validateObject(johnDoe, userScheme);

if (result.length !== 0) {
  dumpErrors(result, johnDoe);
} else {
  console.log(`All is ok`);
}
