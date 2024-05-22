import db from "~/config/db";
import { Schema } from "mongoose";
const userSchema = new Schema(
  {
    app_id: { type: String, required: true }, // 应用ID
    username: { type: String, required: true }, // 用户名
    password: { type: String, required: true }, // 用户密码
    role: { type: String, required: true }, // 用户角色
    status: { type: String, required: true }, // 用户状态
    login_count: { type: Number, default: 0 }, // 登录次数
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
