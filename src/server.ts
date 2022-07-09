import  {AppDataSource}  from "./database/dataSource";

import { app } from "./app";




app.listen(3000, () => console.log("Server is running"));

AppDataSource.initialize()
.then(() => {
  console.log("Data Source has been initialized!");
})
.catch((err) => {
  console.error("Error during Data Source initialization:", err);
});