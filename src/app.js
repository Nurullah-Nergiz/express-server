import dotenv from "dotenv";
import express from "express";
import logger from "morgan";
import appRoutes from "./routes";

dotenv.config();
const port = process.env.PORT || 8000;
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  express.static("public", {
    dotfiles: "ignore",
    etag: false,
    extensions: ["htm", "html", "css"],
    index: false,
    maxAge: "1d",
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set("x-timestamp", Date.now());
    },
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Wellcome Api ...");
  console.log("Gelen var...");
});

app.listen(port, (err) => {
  // cors(app);
  console.clear();
  console.log(`${err ? err : `Server Listen => http://localhost:${port}/`}`);
  router.use(logger("dev"));
  appRoutes(app);
});
