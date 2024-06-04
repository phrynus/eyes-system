import KoaApp from "~/routes";
import models from "~/models";
import config from "~/config";

KoaApp.listen(process.env.PORT, () => {
  models.LogFun.info("服务器启动成功 http://localhost:3000");
  models.LogFun.info(config, "config", false);
});