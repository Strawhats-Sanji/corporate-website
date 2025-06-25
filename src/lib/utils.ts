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
  if (!cloudName) throw new Error('Cloudinary cloud name is not set');

  // Determine if the image is from the gallery or elsewhere
  let folder: string;
  if (path.startsWith('gallery/')) {
    folder = '';
  } else {
    folder = 'imagery/';
  }

  // Remove leading slash if present
  const cleanPath = path.replace(/^\//, '');
  const publicId = folder + cleanPath;

  // Build transformation string
  const transformations = [
    options?.width ? `w_${options.width}` : '',
    options?.quality ? `q_${options.quality}` : 'q_auto',
    options?.format ? `f_${options.format}` : 'f_auto',
    'c_limit',
  ].filter(Boolean).join(',');

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations}/${publicId}`;
}
