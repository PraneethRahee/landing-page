#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// Images to optimize with quality settings
const imagesToOptimize = [
  { file: 'hero-bg.jpg', quality: 75 },
  { file: 'wework-1.jpg', quality: 75 },
  { file: 'wework-2.jpg', quality: 75 },
  { file: 'wework-3.jpg', quality: 75 },
  { file: 'wework-4.jpg', quality: 75 },
  { file: 'card-1.jpg', quality: 80 },
  { file: 'card-2.jpg', quality: 80 },
  { file: 'card-3.jpg', quality: 80 },
  { file: 'card-4.jpg', quality: 80 },
  { file: 'card-5.jpg', quality: 80 },
];

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  for (const img of imagesToOptimize) {
    const filePath = path.join(publicDir, img.file);

    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${img.file}`);
      continue;
    }

    try {
      const stats = fs.statSync(filePath);
      const originalSize = stats.size;

      // Optimize and save
      await sharp(filePath)
        .jpeg({ quality: img.quality, progressive: true })
        .toFile(filePath + '.tmp');

      // Replace original with optimized version
      fs.renameSync(filePath + '.tmp', filePath);

      const newStats = fs.statSync(filePath);
      const newSize = newStats.size;
      const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(2);

      console.log(`✅ ${img.file}`);
      console.log(`   Before: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`   After:  ${(newSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`   Saved:  ${reduction}%\n`);
    } catch (error) {
      console.error(`❌ Error optimizing ${img.file}:`, error.message);
    }
  }

  console.log('✨ Image optimization complete!');
}

optimizeImages().catch(console.error);
