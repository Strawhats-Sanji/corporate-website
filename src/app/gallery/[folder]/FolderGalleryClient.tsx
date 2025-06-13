"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";

export default function FolderGalleryClient({ images }: { images: string[] }) {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <PhotoView key={idx} src={src}>
            <div className="relative w-full h-64 cursor-pointer overflow-hidden rounded-xl shadow hover:shadow-lg">
              <Image src={src} alt={`Image ${idx + 1}`} fill className="object-cover" />
            </div>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}
