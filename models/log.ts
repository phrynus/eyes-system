import db from "~/config/db";
import { Schema } from "mongoose";

const logSchema = new Schema(
  {
    app_id: { type: Schema.Types.ObjectId, ref: "App" }, // 应用ID，引用App模型
    user_id: { type: Schema.Types.ObjectId, ref: "User" }, // 用户ID，引用User模型
    type: { type: String, required: true }, // 日志类型 例如：登录、操作、异常等
    log: { type: String, required: true }, // 日志内容
    ip_address: { type: String, match: /^(\d{1,3}\.){3}\d{1,3}$/ } // 用户IP地址
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("Log", logSchema);
