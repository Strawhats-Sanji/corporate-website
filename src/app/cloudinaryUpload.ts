// cloudinaryUpload.ts
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "your-cloud-name",
  api_key: "your-api-key",
  api_secret: "your-api-secret",
});

cloudinary.uploader.upload("local/path/image.jpg", {
  folder: "summit-website",
});
