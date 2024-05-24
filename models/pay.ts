import db from "~/config/db";
import { Schema } from "mongoose";

const paySchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true }, // 用户ID，引用User模型
    payment_id: { type: Schema.Types.ObjectId, ref: "Payment", required: true }, // 支付ID，引用Payment模型
    name: { type: String, required: true }, // 支付名称
    description: { type: String }, // 支付描述
    payment_method: { type: String, enum: ["支付宝", "微信", "USDT", "其他"], required: true }, // 支付方式：支付宝、微信、银联等
    amount: { type: Number, required: true, min: 0 }, // 支付金额，确保金额不为负数
    status: { type: Number, required: true, default: 1, enum: [1, 2, 3] }, // 支付状态：1-待支付，2-已支付，3-已取消
    payUrl: { type: String }, // 支付链接
    notify_url: { type: String }, // 支付回调地址
    return_url: { type: String } // 支付成功后跳转的地址
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

// 添加索引以优化查询性能
paySchema.index({ user_id: 1, payment_id: 1 });

export default db.model("Pay", paySchema);
