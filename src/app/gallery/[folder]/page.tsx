// app/gallery/[folder]/page.tsx
import fs from "fs/promises";
import path from "path";
import yaml from "js-yaml";
import FolderGalleryClient from "./FolderGalleryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 1. Define the expected props type
interface PageProps {
  params: { folder: string };
}

async function getGalleryImages(folder: string): Promise<string[]> {
  const galleryYmlPath = path.join(process.cwd(), "gallery.yml");
  const content = await fs.readFile(galleryYmlPath, "utf-8");
  const data = yaml.load(content) as Record<string, string[]>;
  // Normalize keys to lowercase for matching
  const key = Object.keys(data).find(
    (k) => k.trim().toLowerCase() === folder.toLowerCase()
  );
  return key ? data[key] : [];
}

export default async function FolderGalleryPage({ params }: PageProps) {
  const { folder } = params;
  let images: string[] = [];
  try {
    images = await getGalleryImages(folder);
  } catch (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">Folder not found or no images</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header scrollState={false} />
      <div className="max-w-6xl mx-auto px-4 py-40">
        <h1 className="text-3xl font-bold mb-15 capitalize text-center">{folder} Gallery</h1>
        <FolderGalleryClient images={images} />
      </div>
      <Footer />
    </main>
  );
}

export async function generateStaticParams(): Promise<{ folder: string }[]> {
  const galleryYmlPath = path.join(process.cwd(), "gallery.yml");
  try {
    const content = await fs.readFile(galleryYmlPath, "utf-8");
    const data = yaml.load(content) as Record<string, string[]>;
    return Object.keys(data).map((folder) => ({ folder: folder.trim() }));
  } catch (error) {
    console.error("gallery.yml not found:", error);
  }
  return [];
}
