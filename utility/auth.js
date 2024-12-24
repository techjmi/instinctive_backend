import jwt from "jsonwebtoken";
// console.log()
export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    // console.log('the token is', token)
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Not Authorized, login first" });
    }
    // Verify the token using the JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded token:", decoded);
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error("Error in auth middleware:", error.message);
    res
      .status(403)
      .json({ success: false, message: "Invalid token or session expired" });
  }
};
