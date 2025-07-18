import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ folder: string }> }
) {
  const { folder } = await params;

  const folderPath = path.join(process.cwd(), "public", "gallery", folder);

  try {
    const files = fs.readdirSync(folderPath);
    const images = files.filter((file) =>
      /\.(png|jpe?g|webp|svg)$/i.test(file)
    );
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json(
      { error: "Folder not found" },
      { status: 404 }
    );
  }
}
