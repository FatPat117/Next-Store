import cloudinary from "@/utils/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
                return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        // convert File -> Buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // upload buffer to Cloudinary
        const result = await new Promise((resolve, reject) => {
                cloudinary.uploader
                        .upload_stream({ folder: "products" }, (error, result) => {
                                if (error) reject(error);
                                else resolve(result);
                        })
                        .end(buffer);
        });

        return NextResponse.json(result);
}
