import fs from "fs";
import path from "path";
import Router from "@koa/router";
const router = new Router();

// 动态路由
fs.readdirSync(__dirname).forEach((file) => {
  if (file === "index.ts" || !file.endsWith(".ts")) return;
  const route = require(path.join(__dirname, file));
  if (route.default) {
    router.use("/" + file.replace(".ts", ""), route.default.routes(), route.default.allowedMethods); // 挂载路由
  }
});

export default router;
