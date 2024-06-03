// 路由
import Koa from "koa";
import KoaRouter from "koa-router";
import KoaLogger from "koa-logger";
import koaHelmet from "koa-helmet";
import koaBody from "koa-body";
import koaStatic from "koa-static";
import KoaCors from "@koa/cors";
import path from "path";

// 路由
import routesUser from "./user";
import routesApi from "./fapi";

// app
const KoaApp = new Koa();
const router = new KoaRouter();
// middleware
KoaApp.use(KoaLogger());
KoaApp.use(koaHelmet());
KoaApp.use(
  koaBody({
    multipart: true
  })
);
KoaApp.use(
  KoaCors({
    credentials: true
  })
);

// router
router.use("/fapi", routesApi.routes(), routesApi.allowedMethods());
router.use("/user", routesUser.routes(), routesUser.allowedMethods());
// response
KoaApp.use(router.routes()).use(router.allowedMethods());
KoaApp.use(koaStatic(path.join(__dirname, "../web/dist")));
// export
export default KoaApp;
