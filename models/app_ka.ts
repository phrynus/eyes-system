import { db } from "~/config";
import { Schema } from "mongoose";
import { nanoid } from "nanoid";
const schema = new Schema(
  {
    pid: { type: String, required: true, ref: "app" },
    uid: { type: String, required: true, ref: "user" }, // 使用者
    // 卡密类型
    ka_type: { type: String, required: true, enum: ["vip", "fun", "sn"] },
    // 卡密面值
    ka_val: { type: Number, required: true },
    // 卡密面值类型 0：秒 1：分 2：小时 3：天 4：月 5：年；
    ka_valt: { type: Number, required: true, enum: [0, 1, 2, 3, 4, 5] },
    ka_name: { type: String, required: true }, // 卡密名称
    ka_code: { type: String, required: true, default: () => nanoid(24) }, // 卡密
    ka_status: { type: Number, required: true, default: 0, enum: [0, 1] }, // 卡密状态 0：未使用 1：已使用
    ka_expire_at: { type: Date, required: true } // 使用时间
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("user", schema);
