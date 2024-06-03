import KoaRouter from "koa-router";

import models from "~/models";

const router = new KoaRouter();

router.post("/list", async (ctx) => {
  ctx.body = await models.App.find().exec();
});

// 导出路由
export default router;
