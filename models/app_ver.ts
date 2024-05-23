import db from "~/config/db";
import { Schema } from "mongoose";
const appVerSchema = new Schema(
  {
    app_id: { type: String, required: true }, // 应用ID
    ver_name: { type: String, required: true }, // 版本名称
    ver_val: { type: Number, required: true }, // 版本号
    ver_url: { type: String }, // 版本下载地址
    ver_desc: { type: String }, // 版本描述
    ver_state: { type: Number, required: true, default: 1 }, // 版本状态 1: 关闭 2: 开启
    ver_is_force: { type: Boolean, required: true, default: true }, // 是否强制更新
    ver_mi_sign: { type: Boolean, required: true, default: false }, // 是否签名
    var_mi_type: { type: String, required: true, default: "rsa" }, // 签名类型
    ver_mi_key: {
      type: Object,
      required: true,
      default: {
        key: "",
        cert: ""
      }
    } // 签名key
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 和'updated_at'以存储上次更新的日期
    }
  }
);
// 导出模型
export default db.model("AppVer", appVerSchema);
