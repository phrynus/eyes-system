import db from "~/config/db";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    app_id: { type: Schema.Types.ObjectId, ref: "App", required: true }, // 应用ID，引用App模型
    username: { type: String, required: true, unique: true, match: /^[a-zA-Z0-9_]{3,30}$/ }, // 用户名
    password: { type: String, required: true, minlength: 8 }, // 用户密码
    integral: { type: Number, default: 0, min: 0 }, // 用户积分
    status: { type: Number, required: true, default: 1 }, // 用户状态 1:正常 2:禁用
    vip_type: { type: Number, default: 1 }, // VIP类型
    vip_expire_time: { type: Date, default: Date.now }, // VIP到期时间
    qq: { type: String, match: /^[1-9][0-9]{4,}$/ }, // 用户QQ
    wx: { type: String }, // 用户微信
    icon: { type: String, match: /^https?:\/\/[^\s$.?#].[^\s]*$/i }, // 用户头像
    email: { type: String, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }, // 用户邮箱
    email_verified: { type: Boolean, default: false }, // 邮箱是否验证
    signature: { type: String }, // 用户签名
    machine_code: { type: String }, // 机器码
    last_login: { type: Date, default: Date.now }, // 最后登录时间
    extra: {
      type: Object,
      default: {}
    } // 其他额外信息
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("User", userSchema);
