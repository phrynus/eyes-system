// 中间件
export default {
  jsonTemplate: await import("./jsonTemplate").then((m) => m.default),
  jwtVerification: await import("./jwtVerification").then((m) => m.default)
};
