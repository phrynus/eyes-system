import db from "~/config/db";
import { Schema } from "mongoose";

const appVerSchema = new Schema(
  {
    app_id: { type: Schema.Types.ObjectId, ref: "App", required: true }, // 应用ID，引用App模型
    ver_name: { type: String, required: true }, // 版本名称
    ver_val: { type: Number, required: true }, // 版本号
    ver_url: { type: String }, // 版本下载地址
    ver_desc: { type: String }, // 版本描述
    ver_state: { type: Number, required: true, default: 1 }, // 版本状态 1: 关闭 2: 开启
    ver_is_force: { type: Boolean, required: true, default: true }, // 是否强制更新
    ver_mi_sign: { type: Boolean, required: true, default: false }, // 是否签名
    ver_mi_type: { type: String, required: true, default: "rsa" }, // 签名类型
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
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("AppVer", appVerSchema);
