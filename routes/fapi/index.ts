import KoaRouter from "koa-router";
import config from "~/config";
import jwt from "jsonwebtoken";
import middlewares from "~/middlewares";
import models from "~/models";
import { generateKeyPairSync } from "crypto";

import RApp from "./app";

const router = new KoaRouter();

router.use(middlewares.jsonTemplate);
// 设置jwt验证
router.use(async (ctx, next) => {
  const token = ctx.headers["authorization"];
  if (!token) {
    ctx.status = 403;
    ctx.body = new Error("token not found");
    return;
  }
  try {
    const decoded = jwt.verify(token, config.JWT.PUBLIC);
    ctx.state.user = decoded;
    await next();
  } catch (err: any) {
    ctx.status = 401;
    ctx.body = new Error(err);
    return;
  }
});

// Register
router.use("/app", RApp.routes(), RApp.allowedMethods());

//
router.post("/app_list", async (ctx) => {
  try {
    ctx.body = await models.App.find(
      {},
      {
        app_name: 1,
        app_ver: 1,
        app_icon: 1,
        app_state: 1
      }
    ).exec();
  } catch (err: any) {
    ctx.body = new Error(err);
  }
});
router.post("/app_add", async (ctx) => {
  try {
    const {
      name,
      ver = "1.0.0",
      icon = "https://static-production.npmjs.com/c426a1116301d1fd178c51522484127a.png"
    } = ctx.request.body;
    if (!name) {
      ctx.body = new Error("name is required");
      return;
    }
    // 检查是否已存在
    if (await models.App.findOne({ app_name: name }).exec()) {
      ctx.body = new Error("app already exists");
      return;
    }
    const { publicKey, privateKey } = await generateKeyPairSync("rsa", {
      modulusLength: 2048, // 密钥长度
      publicKeyEncoding: {
        type: "pkcs1", // 'pkcs1' (RSA) 或 'spki' (用于EC)
        format: "pem" // 'pem' 或 'der'
      },
      privateKeyEncoding: {
        type: "pkcs1", // 'pkcs1' (RSA) 或 'pkcs8' (EC)
        format: "pem" // 'pem' 或 'der'
      }
    });
    const appConfig = new models.App({
      app_name: name,
      app_ver: ver,
      app_icon: icon,
      mi_key: {
        publicKey,
        privateKey
      }
    });
    await appConfig.save();
    ctx.body = appConfig;
  } catch (err: any) {
    ctx.body = new Error(err);
  }
});
router.post("/app_del", async (ctx) => {
  try {
    const { id } = ctx.request.body;
    if (!id) {
      ctx.body = new Error("name is required");
      return;
    }
    if (!(await models.App.findById(id).exec())) {
      ctx.body = new Error("app not found");
      return;
    }
    const app = await models.App.findByIdAndDelete(id).exec();
    ctx.body = app;
  } catch (err: any) {
    ctx.body = new Error(err);
  }
});

// 导出路由
export default router;
