import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { location } = await req.json();

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const origin = "Montana, Pretoria, South Africa";

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
        origin
      )}&destinations=${encodeURIComponent(location)}&key=${apiKey}`
    );

    const data = await response.json();

    if (
      !data.rows ||
      !data.rows[0] ||
      !data.rows[0].elements[0] ||
      data.rows[0].elements[0].status !== "OK"
    ) {
      return NextResponse.json(
        { error: "Could not calculate distance", details: data },
        { status: 400 }
      );
    }

    const distanceInMeters = data.rows[0].elements[0].distance.value;
    const hours = distanceInMeters / 1000 / 60; // 60km/h average
    const estimate = hours * 550;

    return NextResponse.json({ estimate: Math.round(estimate) });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
