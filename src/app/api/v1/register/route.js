import connectDB from "@config/database";
import User from "@models/user";
import { NextRequest as req, NextResponse as res } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectDB();

export const POST = async (req) => {
  try {
    const reqBody = await req.json();

    const { username, email, password } = reqBody;

    let user = await User.findOne({ email });

    if (user) {
      return res.json({ message: "User Already Exist" }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPass = await bcrypt.hash(password, salt);

    user = await User.create({ username, email, password: hashedPass });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const response = res.json(
      {
        success: true,
        user,
      },
      { status: 201 }
    );

    response.cookies.set("user", token, {
      httpOnly: true,
      expires: 7 * 24 * 60 * 60 * 1000,
    });

    return response;
  } catch (error) {
    return res.json({ success: false, message: error }, { status: 500 });
  }
};
