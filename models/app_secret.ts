import { db } from "~/config";
import { Schema } from "mongoose";

const schema = new Schema(
  {
    // 应用ID 链表
    pid: { type: String, required: true, ref: "app" },
    // 加密名称
    secret_name: { type: String, required: true },
    secret_state: { type: String, required: true, default: "NO", enum: ["NO", "RSA", "RC4"] }, // 加密方式
    secret_config: { type: String }, // 加密配置
    secret_sign: { type: Boolean, required: true, default: false }, // 加密签名
    secret_time: {
      type: Number,
      required: true,
      default: 0
    } // 时差
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("app_secret", schema);
