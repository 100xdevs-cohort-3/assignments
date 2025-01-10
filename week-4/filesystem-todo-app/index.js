const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  fs.readdir("./todos", (err, files) => {
    if (err) {
      return res.json({ error: err });
    }
    res.json(files);
  });
});

app.post("/:filename", (req, res) => {
  const filename = req.params.filename;
  const data = req.body.data;

  if (!data) {
    return res.json({ error: "Please provide data." });
  }

  fs.writeFile("./todos/" + filename, data, (err) => {
    if (err) {
      return res.json({ error: err });
    }
    res.json({ msg: "Succesfully added Todo." });
  });
});

app.get("/:filename", (req, res) => {
  const filename = req.params.filename;

  fs.readFile("./todos/" + filename, "utf-8", (err, data) => {
    if (err) {
      return res.json({ error: err });
    }
    res.json({ content: data });
  });
});

app.put("/:filename", (req, res) => {
  const filename = req.params.filename;
  const data = req.body.data;

  if (!data) {
    return res.json({ error: "Please provide valid data." });
  }

  fs.writeFile("./todos/" + filename, data, (err) => {
    if (err) {
      return res.json({ error: err });
    }
  });

  res.json({ msg: "Succesfully changed data." });
});

app.delete("/:filename", (req, res) => {
  const filename = req.params.filename;

  fs.unlink("./todos/" + filename, (err) => {
    if (err) {
      return res.json({ error: err });
    }
  });

  res.json({ msg: "Succesfully deleted todo." });
});
app.listen(3000);
