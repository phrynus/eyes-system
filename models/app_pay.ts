import { db } from "~/config";
import { Schema } from "mongoose";

const schema = new Schema(
  {
    // 应用ID 链表
    pid: { type: String, required: true, ref: "app" },
    // 支付类型
    pay_type: { type: String, required: true },
    // 开关
    pay_state: { type: Number, required: true, default: 0, enum: [0, 1] }, // 1: 启用, 0: 禁用
    //支付配置
    pay_config: { type: Object, required: true }
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("app_pay", schema);
