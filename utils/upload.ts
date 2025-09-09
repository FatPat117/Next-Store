import cloudinary from "@/utils/cloudinary";

type UploadResult = {
        secure_url: string;
        public_id: string;
};

export async function uploadImage(file: File, folder: string = "products"): Promise<UploadResult> {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream({ folder }, (error, result) => {
                        if (error || !result) {
                                reject(error || new Error("Upload failed"));
                        } else {
                                resolve({ secure_url: result.secure_url, public_id: result.public_id });
                        }
                });
                uploadStream.end(buffer);
        });
}

export async function deleteImage(publicId: string): Promise<{ result: string }> {
        if (!publicId) {
                throw new Error("publicId is required to delete image");
        }

        try {
                const result = await cloudinary.uploader.destroy(publicId);
                return result; // { result: "ok" } nếu xoá thành công
        } catch (error) {
                throw new Error(`Failed to delete image: ${(error as Error).message}`);
        }
}
