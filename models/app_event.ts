import { db } from "~/config";
import { Schema } from "mongoose";
import { nanoid } from "nanoid";
const schema = new Schema(
  {
    pid: { type: String, required: true, ref: "app" },
    // 事件名称
    e_name: { type: String, required: true },
    // 消耗类型
    e_type: { type: String, required: true, enum: ["no", "vip", "fun", "sn"] },
    // 值
    e_val: { type: Number, required: true },
    // 事件类型 0：秒 1：分 2：小时 3：天 4：月 5：年；
    e_valt: { type: Number, required: true, enum: [0, 1, 2, 3, 4, 5] },
    // 获得类型
    e_type1: { type: String, required: true, enum: ["no", "vip", "fun", "sn"] },
    // 值
    e_val1: { type: Number, required: true },
    // 事件类型 0：秒 1：分 2：小时 3：天 4：月 5：年；
    e_valt1: { type: Number, required: true, enum: [0, 1, 2, 3, 4, 5] },
    // 状态
    e_status: { type: Number, required: true, enum: [0, 1], default: 1 },
    // vip是否免除消耗
    e_vip: { type: Number, required: true, enum: [0, 1], default: 0 }
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("user", schema);
