import db from "~/config/db";
import { Schema } from "mongoose";
const appSchema = new Schema(
  {
    app_name: { type: String, required: true }, // 应用名称
    app_state: { type: Boolean, required: true, default: false }, // 应用开关
    app_desc: { type: String, required: true, default: "我是描述描述述述述述述述" }, // 应用描述
    app_icon: { type: String, required: true }, // 应用图标
    //
    reg_state: { type: Boolean, required: true, default: false }, // 注册开关
    reg_type: { type: Number, required: true, default: 3 }, // 注册方式 1: 手机号 2: 邮箱 3: 用户名
    reg_machine: { type: Boolean, required: true, default: false }, // 注册设备限制开关 true：查询机器码是否有用户
    reg_machine_num: { type: Number, required: true, default: 1, min: 1 }, // 注册设备限制次数
    reg_ip_time: { type: Boolean, required: true, default: false }, // 注册ip 24小时注册限制开关
    reg_awd: { type: Number, required: true, default: 1 }, // 注册奖励 1: 积分 2: 秒
    reg_awd_val: { type: Number, required: true, default: 0, min: 0 }, // 注册奖励数值 积分/秒
    //
    login_state: { type: Boolean, required: true, default: false }, // 登录开关
    login_machine: { type: Boolean, required: true, default: false }, // 登录设备限制开关 true：次数限制无效 false：machine_code不可为空
    login_machine_awd: { type: Number, required: true, default: 1 }, // 更换设备 1: 积分 2: 秒
    login_machine_val: { type: Number, required: true, default: 0, min: 0 }, // 更换设备数值 积分/秒
    login_mc: { type: Boolean, required: true, default: false }, // 登录限制开关
    login_mc_rule: { type: Number, required: true, default: 1 }, // 登录限制规则 1: 顶替登录 2: 禁止登录
    //
    smtp_state: { type: Boolean, required: true, default: false }, // 邮箱开关
    smtp_port: { type: Number }, // 邮箱端口
    smtp_user: { type: String }, // 邮箱用户名
    smtp_pass: { type: String }, // 邮箱密码
    smtp_host: { type: String }, // 邮箱地址
    //
    sms_state: { type: Boolean, required: true, default: false }, // 短信开关
    sms_url: { type: String }, // 短信接口地址
    sms_key: { type: String }, // 短信接口key
    sms_tpl: { type: String }, // 短信模板
    //
    pay_state: { type: Boolean, required: true, default: false }, // 支付开关
    pay_type: { type: Number, required: true, default: 1 }, // 支付方式 1:关闭 2: 支付宝 3: USDT
    pay_ali_appid: { type: String }, // 支付宝appid
    pay_ali_public_key: { type: String }, // 支付宝公钥
    pay_ali_private_key: { type: String }, // 支付宝私钥
    pay_usdt_url: { type: String }, // USDT接口地址
    pay_usdt_key: { type: String } // USDT接口key
  },
  {
    timestamps: {
      createdAt: "created_at", // 使用'created_at'存储创建的日期
      updatedAt: "updated_at" // 和'updated_at'以存储上次更新的日期
    }
  }
);
// 导出模型
export default db.model("App", appSchema);
