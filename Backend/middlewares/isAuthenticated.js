import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();

const isAuthenticated = async (req, res, next) => {
  try {
    // const token = req.cookies.token;
    const token = req.headers["authorization"];
    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};
export default isAuthenticated;
