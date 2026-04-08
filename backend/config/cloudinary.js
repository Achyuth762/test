import { v2 as cloudinary } from "cloudinary";

export const connectCloudinary = async () => {
  const cloudName = process.env.CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUD_API_KEY || process.env.CLOUDINARY_API_KEY;
  const apiSecret =
    process.env.CLOUD_API_SECRET || process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    console.warn(
      "Cloudinary is not fully configured. Check CLOUD_NAME, CLOUD_API_KEY, and CLOUD_API_SECRET in backend/.env.",
    );
    return;
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });
};

export { cloudinary };
