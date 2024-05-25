import db from "~/config/db";
import { Schema } from "mongoose";

const goodeCardSchema = new Schema(
  {
    app_id: { type: Schema.Types.ObjectId, ref: "App", required: true }, // 应用ID，引用App模型
    goode_id: { type: Schema.Types.ObjectId, ref: "Goode", required: true }, // 商品ID
    card_id: { type: String, required: true, match: /^[0-9a-zA-Z]{8,32}$/ }, // 商品ID卡号
    card_name: { type: String, required: true }, // 卡名称
    card_type: { type: Number, required: true }, // 卡类型  1. 数据卡 2.积分卡 3.vip卡
    card_status: { type: Number, required: true }, // 1. 未激活 2. 已激活
    card_val_money: { type: Number }, // 充值金额 积分/秒
    card_val_data: { type: String } // 充值数据
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("GoodeCard", goodeCardSchema);
