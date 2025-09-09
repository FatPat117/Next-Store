// app/actions/upload.ts
import cloudinary from "@/utils/cloudinary";

export async function uploadImage(file: File, folder: string = "products"): Promise<string> {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream({ folder }, (error, result) => {
                        if (error || !result) {
                                reject(error || new Error("Upload failed"));
                        } else {
                                resolve(result.secure_url);
                        }
                });
                uploadStream.end(buffer); // ✅ Gửi buffer thẳng vào Cloudinary
        });
}
