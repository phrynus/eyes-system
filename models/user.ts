import db from "~/config/db";
import { Schema } from "mongoose";
const userSchema = new Schema(
  {
    app_id: { type: String, required: true }, // 应用ID
    username: { type: String, required: true }, // 用户名
    password: { type: String, required: true }, // 用户密码
    integral: { type: Number, default: 0, min: 0 }, // 用户积分
    status: { type: Number, required: true, default: 1 }, // 用户状态 1:正常 2:禁用
    vip_type: { type: Number, default: 1 }, // VIP类型 1:普通用户 2:普通VIP 3:超级VIP
    vip_expire_time: { type: Date, default: Date.now }, // VIP到期时间
    qq: { type: String }, // 用户QQ
    wx: { type: String }, // 用户微信
    icon: { type: String }, // 用户头像
    email: { type: String }, // 用户邮箱
    signature: { type: String }, // 用户签名
    machine_code: { type: String }, // 机器码
    extra: {
      type: Object,
      default: {
        // ...
      }
    } // 其他额外信息
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 和'updated_at'以存储上次更新的日期
    }
  }
);
// 导出模型
export default db.model("User", userSchema);
