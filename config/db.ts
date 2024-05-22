import mongoose from "mongoose";
if (!process.env.MONGODB_URI) throw Error("MONGODB_URI is already set!");
try {
  await mongoose.connect(process.env.MONGODB_URI || "");
} catch (error) {
  throw error;
}
process.on("SIGINT", () => {
  mongoose.connection.close();
  process.exit();
});
process.on("SIGTERM", () => {
  mongoose.connection.close();
  process.exit();
});
// 导出mongoose
export default mongoose;
