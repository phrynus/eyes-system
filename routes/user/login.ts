import KoaRouter from "koa-router";

const router = new KoaRouter();

router.post("/", async (ctx) => {
  ctx.body = "Hello World!";
});

// 导出路由
export default router;
