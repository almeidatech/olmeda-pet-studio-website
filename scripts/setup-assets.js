#!/usr/bin/env node

/**
 * Copy assets from @olmeda/design-system to local public directory
 * Run this after npm install to ensure fonts and logos are available
 */

const fs = require('fs');
const path = require('path');

const designSystemPath = path.join(__dirname, '../node_modules/@olmeda/design-system');
const publicPath = path.join(__dirname, '../public');

const assets = [
  {
    from: 'src/assets/fonts',
    to: 'fonts',
  },
  {
    from: 'src/assets/logos',
    to: 'logos',
  },
];

function copyAsset(from, to) {
  const sourcePath = path.join(designSystemPath, from);
  const destPath = path.join(publicPath, to);

  if (!fs.existsSync(sourcePath)) {
    console.warn(`⚠️  Source not found: ${sourcePath}`);
    return;
  }

  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath, { recursive: true });
  }

  // Copy files
  const files = fs.readdirSync(sourcePath);
  let copied = 0;

  files.forEach((file) => {
    const sourceFile = path.join(sourcePath, file);
    const destFile = path.join(destPath, file);

    if (fs.statSync(sourceFile).isFile()) {
      fs.copyFileSync(sourceFile, destFile);
      copied++;
    }
  });

  console.log(`✅ Copied ${copied} files from ${from} to public/${to}`);
}

console.log('Setting up design system assets...\n');

assets.forEach(({ from, to }) => {
  copyAsset(from, to);
});

console.log('\n✅ Asset setup complete!');
