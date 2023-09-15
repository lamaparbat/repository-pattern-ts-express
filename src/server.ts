import app from "./app";
import config from "./config/index";
import AdminRouter from "./modules/admin";

const PORT = process.env.PORT || config.port;

app.use("/v1/", [AdminRouter]);
app.listen(PORT, () => {
  console.log(`Server has started at port ${PORT}....`)
});
