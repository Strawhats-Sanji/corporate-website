import fs from "fs/promises";
import path from "path";
import yaml from "js-yaml";

export async function getGalleryFolders(): Promise<{ name: string; path: string; image: string }[]> {
  const galleryYmlPath = path.join(process.cwd(), "gallery.yml");
  try {
    const content = await fs.readFile(galleryYmlPath, "utf-8");
    const data = yaml.load(content) as Record<string, string[]>;
    const folders: { name: string; path: string; image: string }[] = [];

    for (const [section, images] of Object.entries(data)) {
      if (images && images.length > 0) {
        folders.push({ name: section, path: section.toLowerCase(), image: images[0] });
      }
    }

    return folders;
  } catch (error) {
    return [];
  }
}
