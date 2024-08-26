import { MongoDB } from "~/config";
import { Schema } from "mongoose";
import { nanoid } from "nanoid";
const schema = new Schema(
  {
    pid: { type: String, required: true, default: () => nanoid(), unique: true }, // 应用ID
    name: { type: String, required: true }, // 应用名称
    state: { type: Number, required: true, default: 0, enum: [0, 1] }, // 1: 启用, 0: 禁用
    icon: {
      type: String,
      required: true,
      default: "https://static-production.npmjs.com/c426a1116301d1fd178c51522484127a.png"
    }, // 应用图标
    extend: { type: Object, required: true, default: {} } // 扩展字段
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default await MongoDB.model("app", schema);
