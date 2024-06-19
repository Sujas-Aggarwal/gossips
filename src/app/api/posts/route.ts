import clientPromise from "@/helpers/db";
import { time } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        try {
            const posts = await clientPromise!.then(async (client: any) => {
                const db = client.db("gossips");
                const collection = db.collection("posts");
                //reverse the fetch order from mongodb
                const results = await collection
                    .find({})
                    .sort({ createdAt: -1 })
                    .toArray();
                return results;
            });
            return NextResponse.json(posts, { status: 200 });
        } catch (e) {
            return NextResponse.json([], {
                status: 200,
            });
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json(
            { error: "Internal Error Occured" },
            {
                status: 500,
                statusText: "Internal Server Error",
            }
        );
    }
}
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        if (!body.title || !body.description || !body.user) {
            return NextResponse.json(
                { error: "Please Provide All Required Fields" },
                {
                    status: 400,
                    statusText: "Bad Request",
                }
            );
        }
        try {
            const result = await clientPromise!.then(async (client: any) => {
                const db = client.db("gossips");
                const collection = db.collection("posts");
                //put post in db
                const result = collection.insertOne({
                    title: body.title,
                    description: body.description,
                    user: body.user,
                    media: body.media || { type: "", url: "" },
                    likes: [],
                    comments: [],
                    createdAt: new Date().getTime(),
                });
            });
            return NextResponse.json("Post Successfully Created!", {
                status: 200,
            });
        } catch (e) {
            return NextResponse.json([], {
                status: 200,
            });
        }
    } catch (e) {
        console.log(e);
        return NextResponse.json(
            { error: "Internal Error Occured" },
            {
                status: 500,
                statusText: "Internal Server Error",
            }
        );
    }
}

export const maxDuration = 59;
