/**
 * Composites public/assets/logow.png onto public/social/whatsapp-cover.png
 * Run: node scripts/composite-whatsapp-cover.cjs
 */
const sharp = require("sharp");
const path = require("path");

async function main() {
  const root = path.join(__dirname, "..");
  const coverPath = path.join(root, "public/social/whatsapp-cover.png");
  const logoPath = path.join(root, "public/assets/logow.png");

  const { width: cw, height: ch } = await sharp(coverPath).metadata();
  if (!cw || !ch) throw new Error("Could not read cover dimensions");

  const logoWidth = Math.round(cw * 0.19);
  const logoBuf = await sharp(logoPath).resize({ width: logoWidth }).png().toBuffer();

  const { width: lw, height: lh } = await sharp(logoBuf).metadata();
  const left = Math.round(cw * 0.055);
  const top = Math.round(ch * 0.07);

  const tmpPath = path.join(root, "public/social/whatsapp-cover.tmp.png");
  await sharp(coverPath)
    .composite([{ input: logoBuf, left, top }])
    .png({ compressionLevel: 9 })
    .toFile(tmpPath);
  const fs = require("fs");
  fs.renameSync(tmpPath, coverPath);

  console.log("OK: logo composited onto whatsapp-cover.png", {
    cover: `${cw}x${ch}`,
    logo: `${lw}x${lh}`,
    position: { left, top },
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
