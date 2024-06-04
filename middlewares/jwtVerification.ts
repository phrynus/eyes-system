import config from "~/config";
import jwt from "jsonwebtoken";
const jsonTemplate = async (ctx: any, next: any) => {
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
}
export default jsonTemplate;
