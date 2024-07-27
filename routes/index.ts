import koa from "koa";
import Router from "@koa/router";
import Cors from "@koa/cors";

const app = new koa();
const router = new Router();
const cors = Cors();

router.use(cors);
app.use(router.routes()).use(router.allowedMethods());

export default app;
