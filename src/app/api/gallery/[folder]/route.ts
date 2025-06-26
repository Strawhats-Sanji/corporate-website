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

// ✅ Correct types for dynamic route handlers
export async function GET(
  req: NextRequest,
  { params }: { params: Record<string, string> }
) {
  const folder = params.folder;
  const folderPath = path.join(process.cwd(), "public", "gallery", folder);

  try {
    const files = await fs.readdir(folderPath);
    return new Response(JSON.stringify(files), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Folder read error:", error);
    return new Response(
      JSON.stringify({ error: "Folder not found or inaccessible" }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
