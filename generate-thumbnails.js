const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const originalsDir = path.join(__dirname, 'public/images/originals');
const thumbnailsDir = path.join(__dirname, 'public/images/thumbnails');

// Ensure the thumbnails directory exists
if (!fs.existsSync(thumbnailsDir)) {
    fs.mkdirSync(thumbnailsDir);
}

// Read all files in the originals directory
fs.readdir(originalsDir, (err, files) => {
    if (err) {
        console.error('Error reading the originals directory:', err);
        return;
    }

    // Process each file
    files.forEach(file => {
        const inputPath = path.join(originalsDir, file);
        const outputPath = path.join(thumbnailsDir, file);

        // Use sharp to resize the image and create a thumbnail
        sharp(inputPath)
            .resize({ width: 150 }) // Set thumbnail width (you can adjust this)
            .toFile(outputPath, (err) => {
                if (err) {
                    console.error(`Error creating thumbnail for ${file}:`, err);
                } else {
                    console.log(`Thumbnail for ${file} created successfully.`);
                }
            });
    });
});
