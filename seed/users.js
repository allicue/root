const db = require("../db/connection");
const User = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const users = [
    {
      name: "WalkingMan",
      email: "WalkingMan@gmail.com",
      password: "password",
      imgURL: "https://i.imgur.com/5MAjX53.jpeg",
      zipcode: "33445",
    },
    {
      name: "Daniel",
      email: "Daniel@gmail.com",
      password: "danielrocks",
      imgURL:
        "https://avatars3.githubusercontent.com/u/59632599?s=460&u=afd121ed50c8eff1e00a6f09f36d54790ee90119&v=4",
      zipcode: "11570",
    },
  ];

  await User.insertMany(users);
  console.log("Created Users!");
};
const run = async () => {
  await main();
  db.close();
};

run();
