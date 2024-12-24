import { supabase } from '../utility/createClient.js';
import bcryptjs from 'bcryptjs'; 
import { generateToken } from '../utility/generateToken.js';
export const registerUser = async (req, res) => {
  const { email, password, name, image } = req.body;
  // Validate input fields
  if (!email || !password || !name || !image) {
    return res.status(400).json({ message: 'Email, password, image, and name are required.' });
  }

  try {
    const { data: existingUser, error: findError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single(); //

    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use' });
    }

    // Hash the password (async version of bcrypt)
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Insert the new user into the database
    const { data, error } = await supabase.from('users').insert([
      { email, password: hashedPassword, name, image }
    ]);

    // Handle any error during the insert
    if (error) {
      console.error('Error during user insertion:', error.message);
      return res.status(400).json({ message: error.message });
    }

    // Return a success response
    res.status(201).json({
      message: 'User registered successfully',
    });

  } catch (err) {
    console.error('Registration error:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({success:false, message: 'Please enter valid email and password' });
    }

    // Fetch user by email
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) {
      return res.status(404).json({ success:false,message: 'User not found' });
    }

    // Compare passwords
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({success:false, message: 'Email or Password is not valid' });
    }

    // Generate token and send response
    const token = await generateToken(user.id);
    // console.log(token)
    return res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      token,
    });
  } catch (error) {
    // Handle server error
    console.error('The error is:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};
//get used data or user profile
export const getUserData = async (req, res) => {
  try {
    const userId = req.userId;
    // console.log(userId)
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId) 
      .single(); 
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    if (!data) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    // Return the user data
    res.status(200).json({ success: true, user: data });
  } catch (error) {
    console.error('Error in getUserData:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

//handlelogut function
// Logout controller
export const handleLogout = (req, res) => {
  // const userId = req.userId;
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

export const deleteProfile = async (req, res) => {
  try {
  const userId = req.userId;
    const { data, error } = await supabase
      .from('profiles')
      .delete()
      .eq('user.id', userId);

    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
   
    res.status(200).json({
      success: true,
      message: "Profile deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting profile:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};