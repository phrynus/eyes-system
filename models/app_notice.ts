import { db } from "~/config";
import { Schema } from "mongoose";
// 通知公告;
const schema = new Schema(
  {
    // 应用ID 链表
    pid: { type: String, required: true, ref: "app" },
    // 公告
    notice_name: { type: String, required: true },
    // 内容
    notice_content: { type: String, required: true }
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("app_pay", schema);
