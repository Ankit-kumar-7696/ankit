import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("========== API REQUEST ==========");
    console.log("Request Body:", body);
    console.log("N8N_WEBHOOK_URL:", process.env.N8N_WEBHOOK_URL);

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "N8N_WEBHOOK_URL is not configured.",
          hint: "Check the Amplify environment variables and redeploy the application.",
        },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const responseText = await response.text();

    console.log("n8n Status:", response.status);
    console.log("n8n Response:", responseText);

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "n8n returned an error.",
          status: response.status,
          response: responseText,
        },
        { status: response.status }
      );
    }

    try {
      const json = JSON.parse(responseText);

      return NextResponse.json(json);
    } catch {
      return new NextResponse(responseText, {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      {
        status: 500,
      }
    );
  }
}