"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const galleryFolders = [
  { name: "Summit Launch", path: "launch" },
  { name: "Events", path: "events" },
  { name: "Team", path: "team" },
];

export default function GalleryPage() {
  const [folderPreviews, setFolderPreviews] = useState(
    galleryFolders.map((f) => ({ ...f, image: "/placeholder.jpg" }))
  );

  useEffect(() => {
    galleryFolders.forEach(async (folder) => {
      try {
        const res = await fetch(`/api/gallery/${folder.path}`);
        const images = await res.json();
        setFolderPreviews((prev) =>
          prev.map((f) =>
            f.path === folder.path && images.length
              ? { ...f, image: `/gallery/${folder.path}/${images[0]}` }
              : f
          )
        );
      } catch (e) {
        console.error("Error loading folder:", folder.path, e);
      }
    });
  }, []);

  return (
    <main className="min-h-screen">
      <Header scrollState={false} />
      <div className="max-w-6xl mx-auto px-4 py-40">
        <h1 className="text-4xl font-bold mb-10 text-center">Galleria</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {folderPreviews.map((folder) => (
            <Link
              key={folder.name}
              href={`/gallery/${folder.path}`}
              className="block border rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src="https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1714567890/summit-website/image-name.jpg"
                  alt="Summit Bank Team"
                  width={800}
                  height={600}
                  // src={folder.image}
                  // alt={folder.name}
                  // fill
                  // className="object-cover"
                />
              </div>
              <div className="p-4 text-center font-semibold">{folder.name}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}