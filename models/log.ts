import db from "~/config/db";
import { Schema } from "mongoose";
const logSchema = new Schema(
  {
    app_id: { type: String }, // 应用ID
    user_id: { type: String }, // 用户ID
    type: { type: String }, // 日志类型 例如：登录、操作、异常等
    log: { type: String, required: true } // 日志内容
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 和'updated_at'以存储上次更新的日期
    }
  }
);
// 导出模型
export default db.model("Log", logSchema);
