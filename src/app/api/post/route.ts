import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export default async function GET(request: NextRequest, response: NextResponse) {
    
    const allPost = await prisma.post.findMany()


    return NextResponse.json(allPost)
    
}
