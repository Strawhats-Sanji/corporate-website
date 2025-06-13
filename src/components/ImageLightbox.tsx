"use client";
import React, { useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

Modal.setAppElement("body");

type Props = {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  setCurrentIndex: (i: number) => void;
};

export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  setCurrentIndex,
}: Props) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setCurrentIndex((currentIndex + 1) % images.length);
    } else if (e.key === "ArrowLeft") {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  if (!images.length) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Viewer"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 outline-none"
      overlayClassName=""
    >
      <div className="relative max-w-5xl w-full h-[80vh]">
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          fill
          className="object-contain"
        />
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <X size={32} />
        </button>
        <button
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          }
          className="absolute top-1/2 left-4 -translate-y-1/2 text-white"
        >
          <ArrowLeft size={32} />
        </button>
        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-white"
        >
          <ArrowRight size={32} />
        </button>
      </div>
    </Modal>
  );
}
