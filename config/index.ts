import mongoose from "mongoose";
import path from "path";
import ioredis from "ioredis";
import speakeasy from "speakeasy";
import QRCode from "qrcode";

const cPath = path.join(__dirname, "config.json");
// 如果没有就新建一个
if (!(await Bun.file(cPath).exists())) await Bun.write(cPath, "{}");
const cFile = await Bun.file(cPath, { type: "application/json" }).text();
const c = JSON.parse(cFile || "{}");

// mongoose
if (!process.env.MONGODB_URI) throw Error("MONGODB_URI is already set!");
await mongoose.connect(process.env.MONGODB_URI).then(() => console.log("已连接 MongoDB"));
export const MongoDB = mongoose.connection;
// mongoose

// Redis
if (!process.env.REDIS_HOST) throw Error("REDIS_HOST is already set!");
if (!process.env.REDIS_PORT) throw Error("REDIS_PORT is already set!");
if (!process.env.REDIS_PASSWORD) throw Error("REDIS_PASSWORD is already set!");
export const Redis = new ioredis(parseInt(process.env.REDIS_PORT), process.env.REDIS_HOST, {
  password: process.env.REDIS_PASSWORD
}).on("connect", () => console.log("已连接 Redis"));
// Redis

// speakeasy
export const sk: any = {
  use: c.sk ? c.sk.use : false,
  secret: c.sk ? c.sk.secret : speakeasy.generateSecret({ length: 20 })
};
sk.qrCode = c.sk ? c.sk.qrCode : await QRCode.toDataURL(sk.secret.otpauth_url);
// speakeasy
await Bun.write(cPath, JSON.stringify({ sk }, null, 2));
export const config = { MongoDB, Redis, sk };
