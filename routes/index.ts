import koa from "koa";
import Router from "@koa/router";
import Cors from "@koa/cors";
import { koaBody } from "koa-body";

import apiRouter from "./api";

const app = new koa();
const router = new Router();
const cors = Cors();

app.use(koaBody());
app.use(cors);
//
router.use("/api", apiRouter.routes(), apiRouter.allowedMethods());
//
app.use(router.routes()).use(router.allowedMethods());
export default app;
