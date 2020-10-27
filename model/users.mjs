/* eslint-disable import/prefer-default-export */
const user = {
  firstName: "test",
  lastName: "test",
  age: 78,
  phone: "212412342134",
};

const johnDoe = {
  firstName: "test",
  lastName: "test",
  age: 78,
  phone: "212412342134",
};

user.firstName = "";
user.age = 40;

export { user, johnDoe };
