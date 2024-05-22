import db from "~/config/db";
import { KoaApp } from "~/routes";

await KoaApp.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
