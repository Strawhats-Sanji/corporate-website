// app/gallery/[folder]/page.tsx
import fs from "fs/promises";
import path from "path";
import FolderGalleryClient from "./FolderGalleryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 1. Define the expected props type
interface PageProps {
  params: {
    folder: string;
  };
}

// 2. Use the props type in your page component
export default async function FolderGalleryPage({ params }: PageProps) {
  const { folder } = params;
  const folderPath = path.join(process.cwd(), "public", "gallery", folder);

  let images: string[] = [];

  try {
    const files = await fs.readdir(folderPath);
    images = files.map((file) => `/gallery/${folder}/${file}`);
  } catch (error) {
    console.error("Error reading folder:", error);
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">Folder not found or no images</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-40">
        <h1 className="text-3xl font-bold mb-15 capitalize text-center">{folder} Gallery</h1>
        <FolderGalleryClient images={images} />
      </div>
      <Footer />
    </main>
  );
}

// 3. Optionally add types here too
export async function generateStaticParams(): Promise<{ folder: string }[]> {
  const galleryPath = path.join(process.cwd(), "public", "gallery");
  const folders = await fs.readdir(galleryPath);
  return folders.map((folder) => ({ folder }));
}
