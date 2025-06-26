// import fs from "fs/promises";
// import path from "path";
// import { NextRequest } from "next/server";

// export async function GET(
//   req: NextRequest,
//   context: { params: { folder: string } }
// ) {
//   const folder = context.params.folder;
//   const folderPath = path.join(process.cwd(), "public", "gallery", folder);

//   try {
//     const files = await fs.readdir(folderPath);
//     return new Response(JSON.stringify(files), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Folder read error:", error);
//     return new Response(
//       JSON.stringify({ error: "Folder not found or inaccessible" }),
//       {
//         status: 404,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }


import fs from "fs/promises";
import path from "path";
import { NextRequest } from "next/server";

// ✅ Correct type signature for dynamic route handlers
export async function GET(
  _req: NextRequest,
  { params }: { params: { folder: string } }
) {
  const folder = params.folder;
  const folderPath = path.join(process.cwd(), "public", "gallery", folder);

  try {
    const files = await fs.readdir(folderPath);

    // Only return image files
    const imageFiles = files.filter(file =>
      /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(file)
    );

    return new Response(JSON.stringify(imageFiles), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("📂 Folder read error:", error);
    return new Response(
      JSON.stringify({ error: "Folder not found or inaccessible" }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
