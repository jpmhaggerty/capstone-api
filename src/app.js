const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const app = express();
require("dotenv").config();

const knex = require("knex")(
  require("../knexfile.js")[process.env.NODE_ENV || "development"]
);

const port = 8080;
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Test
app.get("/", (req, res) => {
  res.status(200).send("Hello Express World!");
});

const ruleList = [
  "lightning",
  "sefm",
  "cumulus",
  "attached",
  "detached",
  "debris",
  "disturbed",
  "thick",
  "smoke",
  "tribo",
];

for (let i = 0; i < ruleList.length; i++) {
  app.get(`/rules/${ruleList[i]}`, function (req, res) {
    knex
      .select("*")
      .from(`${ruleList[i]}`)
      .orderBy("id", "asc")
      .then((data) => res.status(200).json(data))
      .catch((err) =>
        res.status(404).json({
          message:
            "The data you are looking for could not be found. Please try again",
        })
      );
  });

  app.put(`/rules/${ruleList[i]}`, (req, res) => {
    knex(`${ruleList[i]}`)
      .where("id", "=", req.body.id)
      .update({
        constraint_name: req.body.constraint_name,
        constraint_parameter_integer: req.body.constraint_parameter_integer,
        constraint_operator: req.body.constraint_operator,
        constraint_parameter_boolean: req.body.constraint_parameter_boolean,
        user_input_integer: req.body.user_input_integer,
        user_input_boolean: req.body.user_input_boolean,
        logic_group: req.body.logic_group,
      })
      .then((data) => res.status(200).json(data))
      .catch((err) =>
        res.status(404).json({
          message: "The data could not be posted. Please try again",
        })
      );
  });
}

module.exports = { app, knex };
