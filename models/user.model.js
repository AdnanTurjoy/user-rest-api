const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Adel md adnan",
    email: "aturjoy45@gmail.com",
  },
  {
    id: uuidv4(),
    username: "faisal adnan",
    email: "aturjoy45@gmail.com",
  },
];

module.exports = users;