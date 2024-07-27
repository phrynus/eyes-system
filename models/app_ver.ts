import { db } from "~/config";
import { Schema } from "mongoose";

const schema = new Schema(
  {
    pid: { type: String, required: true, ref: "app" },
    var_name: { type: String, required: true }, //名称
    var_index: { type: String, required: true }, //索引
    var_value: {
      type: String,
      required: true,
      default: "1.0.0",
      // 正则格式
      match: /^[1-9]\d?(\.([1-9]?\d)){2}$/
    }, //版本号
    var_state: { type: Number, required: true, default: 0, enum: [0, 1] }, // 1: 启用, 0: 禁用
    var_desc: { type: String, required: true }, //描述
    // 下载地址
    var_url: { type: String, required: true },
    // 加密
    var_secret: { type: String, required: true }
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("app_ver", schema);
