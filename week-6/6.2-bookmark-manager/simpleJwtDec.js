//decode this by using generator value
const jwt=require("jsonwebtoken");

const contents={
    "name": "puja",
    "accountNumber": 123456,
    "iat": 1730224383
  };

  const newToken=jwt.sign(contents,"hwheyii");
  console.log(newToken);
