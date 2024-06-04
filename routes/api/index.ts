import KoaRouter from "koa-router";

import middlewares from "~/middlewares";
import models from "~/models";

const router = new KoaRouter();

router.use(middlewares.jsonTemplate);

// Register
// router.use("/app", RApp.routes(), RApp.allowedMethods());



// 导出路由
export default router;
