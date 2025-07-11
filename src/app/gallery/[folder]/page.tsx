import { getGalleryImages } from "@/lib/getGalleryImages";

export default async function GalleryFolderPage({ params }: { params: { folder: string } }) {
  const images = await getGalleryImages(params.folder);

  return (
    <div>
      <h1>{params.folder}</h1>
      <ul>
        {images.map((img, i) => (
          <li key={i}><img src={img} alt="" /></li>
        ))}
      </ul>
    </div>
  );
}
