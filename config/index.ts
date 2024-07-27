import mongoose from "mongoose";
import path from "path";
import crypto from "crypto";
import speakeasy from "speakeasy";
import QRCode from "qrcode";

const cPath = path.join(__dirname, "config.json");
// 如果没有就新建一个
if (!(await Bun.file(cPath).exists())) await Bun.write(cPath, "{}");
const cFile = await Bun.file(cPath, { type: "application/json" }).text();
const c = JSON.parse(cFile || "{}");

// mongoose
if (!process.env.MONGODB_URI) throw Error("MONGODB_URI is already set!");
await mongoose.connect(process.env.MONGODB_URI || "").then(() => console.log("Connected to MongoDB!"));
export const db = mongoose.connection;
// mongoose
// jwt
export const jwt = {
  rublicKey: crypto.randomBytes(32).toString("hex"),
  secretKey: c.jwt ? c.jwt.secretKey : crypto.randomBytes(32).toString("hex"),
  expiresIn: "1d",
  refreshTokenExpiresIn: "7d"
};
// jwt
// speakeasy
export const sk: any = {
  use: c.sk ? c.sk.use : false,
  secret: c.sk ? c.sk.secret : speakeasy.generateSecret({ length: 20 })
};
sk.qrCode = c.sk ? c.sk.qrCode : await QRCode.toDataURL(sk.secret.otpauth_url);
// speakeasy
await Bun.write(cPath, JSON.stringify({ jwt, sk }, null, 2));
export const config = { db, jwt, sk };
