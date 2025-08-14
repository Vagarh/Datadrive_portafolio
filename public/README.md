# Public Assets

This directory contains all the static assets for the portfolio application. These files are served publicly and can be accessed directly via URL.

## Folder Structure

The `public` directory is organized as follows:

*   **`images/`**: Contains all the images used in the application.
    *   **`ChatGPT Image 10 ago 2025, 15_47_07.png`**: (Example image)
    *   **`Screenshot 2025-08-10 at 3.46.21 PM.png`**: (Example image)
    *   **`coursera_logo.png`**: Logo for Coursera.
    *   **`credly.png`**: Logo for Credly.
    *   **`google_skills_logo.jpg`**: Logo for Google Skills.
    *   **`platzi_logo.png`**: Logo for Platzi.

*   **`videos/`**: Contains any video files used in the application.
    *   **`your-video.mp4`**: (Placeholder for a video)

## Usage

These assets can be referenced in the code from the root, without the `public` prefix. For example, to use an image from this directory in a Next.js component, you would do the following:

```jsx
import Image from 'next/image';

function MyImage() {
  return (
    <Image
      src="/images/coursera_logo.png"
      alt="Coursera Logo"
      width={200}
      height={100}
    />
  );
}
```

## Adding New Assets

To add new assets, simply place them in the appropriate subdirectory. For example:

*   New images should be added to the `images/` directory.
*   New videos should be added to the `videos/` directory.

Make sure to use descriptive filenames and optimize the assets for the web to ensure fast load times.
