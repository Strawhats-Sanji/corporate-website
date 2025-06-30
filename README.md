# Corporate Website - Gallery & Cloudinary Integration

## Overview
This application is a modern corporate website built with Next.js, featuring a performant, Cloudinary-powered image gallery. All images are hosted on Cloudinary for optimal delivery and scalability.

## Features
- **Cloudinary Integration:** All images are served from Cloudinary, using either direct URLs or a utility for local paths.
- **Dynamic Gallery:** Gallery sections (e.g., events, launch, team) are defined in a `gallery.txt` file, which lists all Cloudinary URLs for each section.
- **Modern Photo Viewer:** When a gallery section is opened, a full-featured, mobile-friendly photo viewer (carousel) is launched, allowing users to scroll through all images in that section.
- **Optimized Loading:** Only the cover/placeholder image for each section is preloaded on the main gallery page.

## Folder Structure
```
public/
  imagery/           # (optional) for non-gallery images if using getCloudinaryUrl
src/
  app/
    gallery/
      [folder]/      # Dynamic route for each gallery section
        FolderGalleryClient.tsx
      page.tsx       # Main gallery page
  components/
  lib/
    utils.ts        # getCloudinaryUrl utility
```

## Cloudinary Setup
1. **Upload all images to Cloudinary.**
   - Gallery images: Use any folder structure you like; just ensure the URLs are correct in `gallery.txt`.
   - Other images (e.g., logos, placeholders): Upload to `imagery/` or use direct URLs.
2. **Set environment variables in `.env.local`:**
   ```
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=summitbank
   ```

## `gallery.txt` Format
- Each section starts with its name (e.g., `events`), followed by a list of Cloudinary image URLs for that section.
- Example:
  ```
  events
  https://res.cloudinary.com/your_cloud_name/image/upload/v1234567890/event1.jpg
  https://res.cloudinary.com/your_cloud_name/image/upload/v1234567890/event2.jpg
  launch
  https://res.cloudinary.com/your_cloud_name/image/upload/v1234567890/launch1.jpg
  ...
  ```

## Gallery Behavior
- **Main Gallery Page (`/gallery`):**
  - Shows only the first image (cover) for each section as a preview.
  - Clicking a section navigates to `/gallery/[section]`.
- **Section Page (`/gallery/[section]`):**
  - Instantly opens a photo viewer (carousel) with all images for that section.
  - User can scroll through all images.
  - Closing the viewer returns to the main gallery.

## Key Components
- **FolderGalleryClient.tsx**
  - On mount, opens `PhotoSlider` with all images for the section.
  - Navigates back to `/gallery` when closed.
- **API Route `/api/gallery-txt`**
  - Parses `gallery.txt` and returns section names and their cover images for the main gallery page.
- **getCloudinaryUrl Utility**
  - Used for non-gallery images (e.g., logos) if you want to build Cloudinary URLs from local paths.

## Customization
- To add or update gallery images, simply edit `gallery.txt` with the correct Cloudinary URLs.
- To add new sections, add a new section name and its image URLs in `gallery.txt`.

## Troubleshooting
- **404 Errors:** Ensure all referenced images are uploaded to Cloudinary at the exact URLs used in `gallery.txt` or by the utility.
- **Network Errors:** Make sure your server/environment can reach `res.cloudinary.com`.
- **Type Errors:** When using `PhotoSlider`, each image object must have a unique `key` property.

## Credits
- [react-photo-view](https://github.com/MinJieLiu/react-photo-view) for the photo viewer/carousel.
- [Cloudinary](https://cloudinary.com/) for image hosting and optimization.

---
For further customization or help, contact the development team.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
