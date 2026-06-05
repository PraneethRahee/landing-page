import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const svgFiles = fs.readdirSync(publicDir).filter(f => f.startsWith('Container-') && f.endsWith('.svg'));

console.log(`Found ${svgFiles.length} SVG files to process...`);

for (const svgFile of svgFiles) {
  const svgPath = path.join(publicDir, svgFile);
  const content = fs.readFileSync(svgPath, 'utf8');

  // Extract base64 image data
  const match = content.match(/data:image\/(png|jpeg|jpg);base64,([A-Za-z0-9+/=]+)/);
  if (!match) {
    console.log(`  ⚠️  No embedded image found in ${svgFile}`);
    continue;
  }

  const format = match[1];
  const base64Data = match[2];
  const imageBuffer = Buffer.from(base64Data, 'base64');

  const outName = svgFile.replace('.svg', '.webp');
  const outPath = path.join(publicDir, outName);

  try {
    await sharp(imageBuffer)
      .webp({ quality: 80 })
      .toFile(outPath);

    const origSize = fs.statSync(svgPath).size;
    const newSize = fs.statSync(outPath).size;
    const saving = ((origSize - newSize) / origSize * 100).toFixed(1);

    console.log(`  ✅ ${svgFile} → ${outName}: ${(origSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${saving}% smaller)`);
  } catch (err) {
    console.log(`  ❌ Failed ${svgFile}: ${err.message}`);
  }
}

// Also compress hero-bg.jpg and Speckles logo
const extras = [
  { src: 'hero-bg.jpg', quality: 75 },
  { src: 'trustedpatners/Speckles Developers Logo.jpg', quality: 75 },
];

console.log('\nCompressing extra images...');
for (const { src, quality } of extras) {
  const srcPath = path.join(publicDir, src);
  if (!fs.existsSync(srcPath)) { console.log(`  ⚠️  Not found: ${src}`); continue; }

  const tmpPath = srcPath + '.tmp';
  try {
    await sharp(srcPath).jpeg({ quality }).toFile(tmpPath);
    const origSize = fs.statSync(srcPath).size;
    const newSize = fs.statSync(tmpPath).size;
    fs.renameSync(tmpPath, srcPath);
    const saving = ((origSize - newSize) / origSize * 100).toFixed(1);
    console.log(`  ✅ ${src}: ${(origSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${saving}% smaller)`);
  } catch (err) {
    fs.existsSync(tmpPath) && fs.unlinkSync(tmpPath);
    console.log(`  ❌ Failed ${src}: ${err.message}`);
  }
}

console.log('\nDone!');
