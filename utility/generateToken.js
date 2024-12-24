import jwt from 'jsonwebtoken'
export const generateToken= async(userId)=>{
    // console.log('JWT Secret:', process.env.JWT_SECRET);
    return jwt.sign({id:userId}, process.env.JWT_SECRET,{expiresIn:"30d"})
}