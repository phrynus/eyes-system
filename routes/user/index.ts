import KoaRouter from "koa-router";
import config from "~/config";
import RLogin from "./login";

const router = new KoaRouter();
// 设置路由
router.use("/login", RLogin.routes(), RLogin.allowedMethods());
// 判断是否开启两步验证
router.post("/qr", async (ctx) => {
  if (config.speakeasy.use) return;
  config.speakeasy.use = true;
  config.go();
  ctx.body = config.speakeasy.qr_code;
});

// 导出路由
export default router;
