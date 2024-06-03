// 数据库模型 集合
const models = {
  App: await import("./app").then((m) => m.default),
  User: await import("./user").then((m) => m.default),
  Pay: await import("./pay").then((m) => m.default),
  Goods: await import("./goods").then((m) => m.default),
  GoodsCard: await import("./goods_card").then((m) => m.default),
  Log: await import("./log").then((m) => m.default),
  LogFun: {
    info: async (e: any, type = "system", isLog = true) => {
      new models.Log({
        type: "info-" + type,
        log: JSON.stringify(e)
      }).save();
      if (isLog) console.log(e);
    },
    error: async (e: any, type = "system", isLog = true) => {
      new models.Log({
        type: "error-" + type,
        log: JSON.stringify(e)
      }).save();
      if (isLog) console.error(e);
    },
    warn: async (e: any, type = "system", isLog = true) => {
      new models.Log({
        type: "warn-" + type,
        log: JSON.stringify(e)
      }).save();
      if (isLog) console.warn(e);
    }
  }
};
export default models;
