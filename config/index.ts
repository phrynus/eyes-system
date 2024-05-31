// 读取config.json
import path from "path";
import crypto from "crypto";
import speakeasy from "speakeasy";
import QRCode from "qrcode";
//
const configPath = path.join(__dirname, "config.json");
const configFile = await Bun.file(configPath, { type: "application/json" }).text();
const config = JSON.parse(configFile || "{}");
config.name = process.env.NAME || "SYSTEM";
// 初始化 config 配置
config.JWT = {
  // 随机字符串
  SECRET: crypto.randomBytes(32).toString("base64"),
  // 基础过期时间
  EXPIRES_IN: "1d",
  // 续约过期时间
  REFRESH_EXPIRES_IN: "7d",
  // 是否允许续约
  RESAVE: process.env.JWT_RESAVE === "true"
};
if (!config.speakeasy?.ascii) {
  config.speakeasy = speakeasy.generateSecret();
  config.speakeasy.use = false;
  config.speakeasy.otpauth_url = speakeasy.otpauthURL({
    secret: config.speakeasy.ascii,
    label: "DEEP"
  });
  config.speakeasy.qr_code = await QRCode.toDataURL(config.speakeasy.otpauth_url);
}
config.go = () => {
  Bun.write(configPath, JSON.stringify(config));
};
config.go();
export default config;
