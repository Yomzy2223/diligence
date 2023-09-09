import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
  //   NextResponse.redirect(new URL("/requests"));
  console.log(req.url);
  if (req.url === "http://localhost:3000/requests/unverified") {
    console.log(true);
    NextResponse.redirect(new URL("http://localhost:3000"));
  }
};
