const axios = require("axios");
const signupApi = process.env.URL;

const users = [
  {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "password456",
  },
];

users.forEach((user) => {
  axios
    .post(signupApi, user)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});
