import { getGalleryFolders } from "@/lib/getGalleryFolders";
import GalleryPageClient from "./GalleryPageClient"; // renamed your component

export default async function GalleryPage() {
  const folders = await getGalleryFolders(); // runs server-side

  return <GalleryPageClient initialFolders={folders} />;
}
