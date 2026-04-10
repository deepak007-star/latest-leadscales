import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Log for development — replace with email service (Resend, SendGrid, etc.)
    console.log("New lead received:", data);

    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch shortly." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
