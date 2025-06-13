"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GenericHero from "@/components/generalHero/GenericHero";

const galleryFolders = [
  { name: "Summit Launch", path: "launch", image: "/gallery/launch/launch1.png" },
  { name: "Events", path: "events", image: "/gallery/events/event1.png" },
  { name: "Team", path: "team", image: "/gallery/team/team1.png" },
  
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header scrollState={false}/>
        <div className="max-w-6xl mx-auto px-4 py-40">
        <h1 className="text-4xl font-bold mb-10 text-center">Galleria</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryFolders.map((folder) => (
            <Link
              key={folder.name}
              href={`/gallery/${folder.path}`}
              className="block border rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={folder.image}
                  alt={folder.name}
                  fill
                  className="object-cover"
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
