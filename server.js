import { app } from "./app.js";
import { connectDB } from "./data/database.js";


connectDB();


app.listen(5173, () => {
  console.log(`server is running on port:5173 in ${process.env.NODE_ENV} Mode`);
});


