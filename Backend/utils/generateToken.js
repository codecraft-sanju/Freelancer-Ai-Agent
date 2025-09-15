import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });


  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,   
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, 
  });

  return token;
};

export default generateToken;
