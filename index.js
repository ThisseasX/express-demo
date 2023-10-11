const app = require("express")();

app
  .get("/", (req, res) => {
    res.json({ hello: "world!" });
  })
  .listen(3000, () => console.log("Server running on port 3000"));
