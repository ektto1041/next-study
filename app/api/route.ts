import { NextRequest } from "next/server";

export async function GET() {
  return new Response("SUCCESS", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const carName = formData.get("carName") as string;
  const carDist = formData.get("carDist") as string;

  return new Response(`${carName} ${carDist}`, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
