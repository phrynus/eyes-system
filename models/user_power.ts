import db from "~/config/db";
import { Schema } from "mongoose";

const userPowerSchema = new Schema(
  {
    app_id: { type: Schema.Types.ObjectId, ref: "App", required: true }, // 应用ID，引用App模型
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true }, // 用户ID，引用User模型
    power: { type: String, required: true }, // 权限，例如：read、write、admin
    description: { type: String, required: true }, // 权限描述
    permissions: { type: Array, required: true }, // 权限列表
    extra: { type: String } // 其他额外信息
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("UserPower", userPowerSchema);
