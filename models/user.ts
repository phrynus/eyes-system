import db from "~/config/db";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    app_id: { type: Schema.Types.ObjectId, ref: "App", required: true }, // 应用ID，引用App模型
    username: { type: String, required: true, unique: true, match: /^[\w-]{4,16}$/ }, // 用户名
    password: { type: String, required: true, minlength: 8 }, // 用户密码
    icon: {
      type: String,
      match: /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/
    }, // 用户头像
    integral: { type: Number, default: 0, min: 0 }, // 用户积分
    status: { type: Number, required: true, default: 1 }, // 用户状态 1:正常 2:禁用
    vip_type: { type: Number, default: 1 }, // VIP类型
    vip_expire_time: { type: Date, default: Date.now }, // VIP到期时间
    email: {
      type: String,
      match:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }, // 用户邮箱
    mobile: {
      type: String,
      match:
        /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/
    }, // 用户手机号
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
