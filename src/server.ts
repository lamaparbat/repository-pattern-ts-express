import app from "./app";
import config from "./config";


const PORT = process.env.PORT || config.port;


app.listen(PORT, () => {
  console.log(`Server has started at port ${PORT}....`)
});


