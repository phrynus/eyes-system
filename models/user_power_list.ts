import db from "~/config/db";
import { Schema } from "mongoose";

const userPowerListSchema = new Schema(
  {
    app_id: { type: Schema.Types.ObjectId, ref: "App", required: true }, // 应用ID，引用App模型
    name: { type: String, required: true }, // 权限名称
    code: { type: String, required: true }, // 权限代码
    family: { type: String }, // 权限索引
    description: { type: String } // 权限描述
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("UserPowerList", userPowerListSchema);
