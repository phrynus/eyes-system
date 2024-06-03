import KoaRouter from "koa-router";
import speakeasy from "speakeasy";
import config from "~/config";
import jwt from "jsonwebtoken";
const router = new KoaRouter();

router.post("/", async (ctx) => {
  const { totp } = ctx.request.body || {};
  if (!totp) {
    ctx.body = new Error("Missing totp");
    return;
  }
  const isVerified = speakeasy.totp.verify({
    secret: config.speakeasy.base32,
    encoding: "base32",
    token: totp,
    window: 1
  });
  if (!isVerified) {
    ctx.body = new Error("Invalid totp");
    return;
  }
  const token = jwt.sign({}, config.JWT.PUBLIC, {
    expiresIn: config.JWT.EXPIRES_IN
  });
  const renewToken = jwt.sign({}, config.JWT.PRIVATE, {
    expiresIn: config.JWT.RENEW_EXPIRES_IN
  });
  ctx.body = {
    token,
    renewToken
  };
});
router.post("/renew", async (ctx) => {
  try {
    const { renewToken } = ctx.request.body || {};
    if (!renewToken) {
      ctx.body = new Error("Missing renewToken");
      return;
    }
    jwt.verify(renewToken, config.JWT.PRIVATE);
    const token = jwt.sign({}, config.JWT.PUBLIC, {
      expiresIn: config.JWT.EXPIRES_IN
    });
    ctx.body = {
      token
    };
  } catch (error) {
    ctx.status = 401;
    ctx.body = new Error(error);
  }
});
// 导出路由
export default router;
