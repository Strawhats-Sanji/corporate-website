"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import { getCloudinaryUrl } from "@/lib/utils";

const isCloudinaryUrl = (url: string) => url.startsWith('http');

/**
 * FolderGalleryClient
 *
 * This component is used in /gallery/[folder] to display all images for a gallery section (e.g., events, launch, team).
 *
 * Behavior:
 * - On mount, immediately opens a modern photo viewer (PhotoSlider) with all images for the section.
 * - When the viewer is closed, navigates back to the main gallery page (/gallery).
 *
 * Props:
 * - images: string[] - Array of Cloudinary image URLs for the section, as defined in gallery.txt
 */
export default function FolderGalleryClient({ images }: { images: string[] }) {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    // Delay navigation to allow close animation
    setTimeout(() => {
      router.push("/gallery");
    }, 300);
  };

  return (
    <PhotoSlider
      images={images.map((src, idx) => ({ src, key: idx }))}
      visible={visible}
      onClose={handleClose}
      index={index}
      onIndexChange={setIndex}
    />
  );
}
