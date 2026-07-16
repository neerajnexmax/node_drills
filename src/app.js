import express from "express";
import routes from "./routes/index.js";

const app = express();

//parses incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//taxonomy routes
app.use("/api/v1/", routes);





export default app;




