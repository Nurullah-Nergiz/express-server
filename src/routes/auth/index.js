import express from "express";

const route = () => {
  const router = new express.Router();

  router.post("/login", (req, res) => {
    // console.log(req.headers);
    res.send("Birds home page");
  });

  router.post("/as", (req, res) => {
    console.log("as");
    res.send("About birds");
  });

  return router;
};

export default {
  route,
  prefix: "/",
};
