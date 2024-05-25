import db from "~/config/db";
import { Schema } from "mongoose";

const appSchema = new Schema(
  {
    app_name: { type: String, required: true }, // 应用名称
    app_state: { type: Boolean, required: true, default: false }, // 应用开关
    app_desc: { type: String, required: true, default: "我是描述描述述述述述述述" }, // 应用描述
    app_icon: { type: String, required: true }, // 应用图标
    reg_state: { type: Boolean, required: true, default: false }, // 注册开关
    reg_type: { type: Number, required: true, default: 3 }, // 注册方式 1: 手机号 2: 邮箱 3: 用户名
    reg_machine: { type: Boolean, required: true, default: false }, // 注册设备限制开关
    reg_machine_num: { type: Number, required: true, default: 1, min: 1 }, // 注册设备限制次数
    reg_ip: { type: Boolean, required: true, default: false }, // 注册IP限制开关
    reg_ip_num: { type: Boolean, required: true, default: false }, // 注册IP限制次数
    reg_awd: { type: Number, required: true, default: 1 }, // 注册奖励类型 1: 积分 2: VIP
    reg_awd_val: { type: Number, required: true, default: 0, min: 0 }, // 注册奖励数值  积分/秒
    login_state: { type: Boolean, required: true, default: false }, // 登录开关
    login_machine: { type: Boolean, required: true, default: false }, // 登录设备限制开关
    login_machine_awd: { type: Number, required: true, default: 1 }, // 更换设备奖励类型
    login_machine_val: { type: Number, required: true, default: 0, min: 0 }, // 更换设备奖励数值
    login_mc: { type: Boolean, required: true, default: false }, // 登录限制开关
    login_mc_rule: { type: Number, required: true, default: 1 }, // 登录限制规则
    smtp_state: { type: Boolean, required: true, default: false }, // 邮箱开关
    smtp_port: { type: Number }, // 邮箱端口
    smtp_user: { type: String }, // 邮箱用户名
    smtp_pass: { type: String }, // 邮箱密码
    smtp_host: { type: String }, // 邮箱地址
    sms_state: { type: Boolean, required: true, default: false }, // 短信开关
    sms_url: { type: String }, // 短信接口地址
    sms_key: { type: String }, // 短信接口key
    sms_tpl: { type: String }, // 短信模板
    pay_state: { type: Boolean, required: true, default: false }, // 支付开关
    pay_type: { type: String, required: true, default: "alipay", enum: ["alipay", "wechat", "usdt"] }, // 支付方式 支付宝、微信、USDT
    pay_config: {
      type: Object,
      default: {
        alipay: {
          state: false
        },
        wechat: {
          state: false
        },
        usdt: {
          state: false
        }
      }
    } // 支付配置
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 使用'updated_at'存储上次更新的日期
    }
  }
);

export default db.model("App", appSchema);
