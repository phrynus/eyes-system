// 路由
import Koa from "koa";
import KoaRouter from "koa-router";
import KoaLogger from "koa-logger";
import koaHelmet from "koa-helmet";
import koaBody from "koa-body";
import KoaCors from "@koa/cors";

const KoaApp = new Koa();
const router = new KoaRouter();
// middleware
KoaApp.use(KoaLogger());
KoaApp.use(koaHelmet());
KoaApp.use(koaBody());
KoaApp.use(KoaCors());
// router

// response
KoaApp.use(router.routes()).use(router.allowedMethods());
// export
export default KoaApp;
