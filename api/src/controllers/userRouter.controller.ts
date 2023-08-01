import { genToken } from "./../helpers/genToken";
import { ActivationTokenPayload } from "./../types/index";
import { sendEmail } from "./../helpers/sendEmail";
import jwt from "jsonwebtoken";
import { comparePassword, hashPassword } from "./../helpers/securePassword";
import { Request, Response } from "express";
import User from "../models/user.model";

// register User
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, phone } = req.body;

    // check if user already exists
    const user: any = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // hash password
    const hasedPassword = await hashPassword(password);

    // save user temporarily in a token
    const token = jwt.sign(
      { fullName, email, password: hasedPassword, phone },
      String(process.env.JWT_SECRET),
      { expiresIn: "10m" }
    );

    // prepare email
    const emailData = {
      email,
      subject: "Account activation link",
      html: `
        <h1>Please use the following link to activate your account</h1>
        <p>${process.env.CLIENT_URL}/activate/${token}</p>
        `,
    };

    // send email
    await sendEmail(emailData);

    return res
      .status(200)
      .json({ message: "Check your email and activate your account" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// activate Account
export const activateAccount = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;

    // check if token exists
    if (!token) return res.status(400).json({ message: "Invalid token" });

    // verify token
    const decoded = jwt.verify(
      token,
      String(process.env.JWT_SECRET)
    ) as ActivationTokenPayload;

    // check if token is expired
    if (!decoded)
      return res.status(400).json({ message: "Expired token. Try again" });

    // check if user already exists
    const user = await User.findOne({ email: decoded.email });

    if (user) return res.status(400).json({ message: "User already exists" });

    // create new user
    const newUser = new User({
      ...decoded,
      isVerified: true,
      isAdmin: true,
    });

    // save user
    await newUser.save();

    return res.status(200).json({ message: "Account activated successfully" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// login User
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    // check if password is correct
    const isMatch = await comparePassword(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    // generate token
    const token = genToken(user._id);

    return res.status(200).json({
      message: "Login successful",
      user: {
        fullName: user.fullName,
        email: user.email,
        isVerified: user.isVerified,
        isAdmin: user.isAdmin,
      },
      token,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// Get a single user
export const getUser = async (req: any, res: Response) => {
  try {
    //console.log(req.user); // this is the user object from the token
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "User fetched successfully",
      user,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users
export const getUsers = async (req: any, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      message: "Users fetched successfully",
      ...users,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// update user

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { fullName, email } = req.body;

    // check if user exists
    // check if the user exists
    const existingUser = await User.findById(id);

    if (!existingUser) {
      return res.status(401).json({
        message: "User does not exist",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { fullName, email },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete User
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// forgot password
export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // generate token
    const token = jwt.sign(
      { userId: user._id },
      String(process.env.JWT_SECRET),
      { expiresIn: "10m" }
    );

    // hash token
    const hashedToken = await hashPassword(token);

    // save hashed token to user document
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 600000; // 10 minutes
    await user.save();

    // prepare email
    const emailData = {
      email,
      subject: "Password reset link",
      html: `
        <h1>Please use the following link to reset your password</h1>
        <p>${process.env.CLIENT_URL}/reset-password/${token}</p>
        `,
    };

    // send email
    await sendEmail(emailData);

    return res
      .status(200)
      .json({ message: "Reset password link sent to email" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    // check if token is valid
    const user = await User.findOne({
      resetPasswordToken: await hashPassword(token),
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user)
      return res.status(400).json({ message: "Invalid or expired token" });

    // hash new password
    const hashedPassword = await hashPassword(password);

    // update user password
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    return res.status(200).json({ message: "Password reset successful" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
