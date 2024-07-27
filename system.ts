import app from "./routes";
import { config } from "./config";

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
console.log(config.sk.use ? "Not Logged In" : "Logged In");
