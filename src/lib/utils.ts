import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generates a Cloudinary URL for an image.
 * @param path - The relative path of the image in the local project (e.g., 'gallery/events/event1.png' or 'about.png')
 * @param options - Optional Cloudinary transformation options
 * @returns The Cloudinary URL
 */
export function getCloudinaryUrl(path: string, options?: { width?: number; quality?: number; format?: string }): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    // fallback to placeholder
    return "/placeholder.jpg"; // or return an empty string, or log warning
  }

  let folder = path.startsWith("gallery/") ? '' : 'imagery/';
  const cleanPath = path.replace(/^\//, '');
  const publicId = folder + cleanPath;

  const transformations = [
    options?.width ? `w_${options.width}` : '',
    options?.quality ? `q_${options.quality}` : 'q_auto',
    options?.format ? `f_${options.format}` : 'f_auto',
    'c_limit',
  ].filter(Boolean).join(',');

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`;
}
