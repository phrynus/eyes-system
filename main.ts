import app from "./routes";
import { config } from "./config";
import models from "./models";

app.listen(process.env.PORT, () => {
  console.log("127.0.0.1:" + process.env.PORT);
});
console.log(models);
