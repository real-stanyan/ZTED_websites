import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export const POST = async (req) => {
  try {
    const body = await req.json(); // Parse the request body as JSON
    await dbConnect();
    const existingUser = await User.findOne({ phone: body.phone });
    if (existingUser) {
      return NextResponse.json(
        { error: "Phone number already exists" },
        { status: 201 }
      );
    }
    const user = new User(body);
    await user.save();
    return new NextResponse(JSON.stringify(user));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: error.message,
      })
    );
  }
};
