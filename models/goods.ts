import db from "~/config/db";
import { Schema } from "mongoose";

const goodeSchema = new Schema(
  {
    app_id: { type: Schema.Types.ObjectId, ref: "App", required: true }, // 应用ID，引用App模型
    name: { type: String, required: true }, // 商品名称
    price: { type: Number, required: true, min: 0 }, // 商品价格
    status: { type: Number, required: true, default: 1 }, // 商品状态，1-上架，2-下架
    type: { type: Number, required: true, default: 1 }, // 商品类型，1-普通商品，2-发卡
    sort: { type: Number }, // 商品排序
    image: { type: String }, // 商品图片
    description: { type: String }, // 商品描述
    detail: { type: String } // 商品详情
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("Goode", goodeSchema);
