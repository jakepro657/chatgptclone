import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    if (!openai.apiKey)
      return new NextResponse("OpenAI API Key not configured", { status: 500 });

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages,
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("error", error);
  }
}
