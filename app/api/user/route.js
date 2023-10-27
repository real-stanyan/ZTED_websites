// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/dbConnect";
// import User from "@/models/User";

// export const POST = async (req) => {
//   const responseHeaders = {
//     "Access-Control-Allow-Origin": "*", // Allow any origin
//     "Access-Control-Allow-Methods": "GET, POST", // Allow GET and POST methods
//     "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
//   };
//   try {
//     const body = await req.json(); // Parse the request body as JSON
//     await dbConnect();
//     const existingUser = await User.findOne({ phone: body.phone });
//     if (existingUser) {
//       return NextResponse.json(
//         { error: "Phone number already exists" },
//         { status: 201 }
//       );
//     }
//     const user = new User(body);
//     await user.save();
//     return new NextResponse(JSON.stringify(user));
//   } catch (error) {
//     return new NextResponse(
//       JSON.stringify({
//         success: false,
//         error: error.message,
//       })
//     );
//   }
// };
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export const POST = async (req) => {
  const responseHeaders = {
    "Access-Control-Allow-Origin": "*", // Allow any origin
    "Access-Control-Allow-Methods": "GET, POST", // Allow GET and POST methods
    "Access-Control-Allow-Headers": "Content-Type", // Allow Content-Type header
  };

  try {
    const body = await req.json();
    await dbConnect();
    const existingUser = await User.findOne({ phone: body.phone });
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ error: "Phone number already exists" }),
        {
          status: 400, // Bad Request
          headers: responseHeaders,
        }
      );
    }
    const user = new User(body);
    await user.save();
    return new NextResponse(JSON.stringify(user), { headers: responseHeaders });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { headers: responseHeaders }
    );
  }
};
