import { getGalleryImages } from "@/lib/getGalleryImages";

interface PageProps {
  params: {
    folder: string;
  };
}

export default async function GalleryFolderPage({ params }: PageProps) {
  const images = await getGalleryImages(params.folder);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Gallery: {params.folder}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Gallery ${params.folder} ${i}`} />
        ))}
      </div>
    </div>
  );
}
