const jsonTemplate = async (ctx: any, next: any) => {
  await next();
  ctx.set("Content-Type", "application/json; charset=utf-8");
  let data = ctx.body;
  ctx.body = {
    code: ctx.status,
    message: ctx.message,
    data: data,
    time: new Date().getTime()
  };
};
export default jsonTemplate;
