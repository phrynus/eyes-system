import { db } from "~/config";
import { Schema } from "mongoose";
import { nanoid } from "nanoid";
const schema = new Schema(
  {
    pid: { type: String, required: true, ref: "app" },
    uid: { type: String, required: true, default: () => nanoid(), unique: true }, // 身份ID
    name: { type: String, required: true, unique: true }, // 用户名
    password: { type: String, required: true }, // 密码
    avatar: { type: String, default: "/images/avatar.png" }, // 头像
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    qq: { type: String, unique: true },
    fen: { type: Number, default: 0 }, // 余额积分
    vip: { type: Date, default: () => new Date(new Date().getTime() - 24 * 60 * 60 * 1000) }, // vip日期
    reg_ip: { type: String, default: "127.0.0.1" }, // 注册IP
    reg_time: { type: Date, default: () => new Date() }, // 注册时间
    remark: { type: String, default: "" }, // 备注
    status: { type: Number, default: 1 }, // 状态
    sn_max: { type: Number, default: 1 }, // 最大绑定
    sn_list: { type: Array, default: [] } // 绑定对象列表
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("user", schema);
