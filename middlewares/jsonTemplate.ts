const jsonTemplate = async (ctx: any, next: any) => {
  await next();
  ctx.set("Content-Type", "application/json; charset=utf-8");
  let data = ctx.body;
  // 判断是否是Error
  if (data instanceof Error) {
    ctx.status = ctx.status == 200 ? 500 : ctx.status;
    ctx.message = data.message;
  }
  ctx.body = {
    code: ctx.status,
    message: ctx.message,
    data: data,
    time: new Date().getTime()
  };
};
export default jsonTemplate;
