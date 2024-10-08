import { MongoDB } from "~/config";
import { Schema } from "mongoose";
import { nanoid } from "nanoid";
const schema = new Schema(
  {
    pid: { type: String, required: true, ref: "app" },
    uid: { type: String, required: true, default: () => nanoid(), unique: true }, // 身份ID
    name: { type: String, required: true, unique: true }, // 用户名
    password: { type: String, required: true }, // 密码
    extend: { type: Object, required: true, default: {} } // 扩展字段
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default MongoDB.model("user", schema);
