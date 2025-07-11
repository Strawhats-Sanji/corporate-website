import fs from "fs/promises";
import path from "path";
import yaml from "js-yaml";

export async function getGalleryImages(folder: string): Promise<string[]> {
  const galleryPath = path.join(process.cwd(), "gallery.yml");
  try {
    const content = await fs.readFile(galleryPath, "utf-8");
    const data = yaml.load(content) as Record<string, string[]>;
    return data[folder] || [];
  } catch {
    return [];
  }
}
