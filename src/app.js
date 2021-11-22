const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const app = express();
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

//Rule 1: Lightning
app.get("/rules/lightning", function (req, res) {
  knex
    .select("*")
    .from("lightning_rule")
    .orderBy("id", "asc")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.put("/rules/lightning", (req, res) => {
  knex("lightning_rule")
    .where("id", "=", req.body.id)
    .update({
      constraint_name: req.body.constraint_name,
      constraint_parameter_integer: req.body.constraint_parameter_integer,
      constraint_parameter_boolean: req.body.constraint_parameter_boolean,
      user_input_integer: req.body.user_input_integer,
      user_input_boolean: req.body.user_input_boolean,
    })
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message: "The data could not be posted. Please try again",
      })
    );
});

//Rule 2: Surface Electric Field Mill
app.get("/rules/sefm", function (req, res) {
  knex
    .select("*")
    .from("surface_electric_field_rule")
    .orderBy("id", "asc")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.put("/rules/sefm", (req, res) => {
  knex("surface_electric_field_rule")
    .where("id", "=", req.body.id)
    .update({
      constraint_name: req.body.constraint_name,
      constraint_parameter_integer: req.body.constraint_parameter_integer,
      constraint_parameter_boolean: req.body.constraint_parameter_boolean,
      user_input_integer: req.body.user_input_integer,
      user_input_boolean: req.body.user_input_boolean,
    })
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message: "The data could not be posted. Please try again",
      })
    );
});

//Rule 3: Cumulus Cloud
app.get("/rules/cumulus", function (req, res) {
  knex
    .select("*")
    .from("cumulus_cloud_rule")
    .orderBy("id", "asc")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.put("/rules/cumulus", (req, res) => {
  knex("cumulus_cloud_rule")
    .where("id", "=", req.body.id)
    .update({
      constraint_name: req.body.constraint_name,
      constraint_parameter_integer: req.body.constraint_parameter_integer,
      constraint_parameter_boolean: req.body.constraint_parameter_boolean,
      user_input_integer: req.body.user_input_integer,
      user_input_boolean: req.body.user_input_boolean,
    })
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message: "The data could not be posted. Please try again",
      })
    );
});

//Rule 4: Attached Anvil Cloud
app.get("/rules/attached", function (req, res) {
  knex
    .select("*")
    .from("attached_anvil_cloud_rule")
    .orderBy("id", "asc")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.put("/rules/attached", (req, res) => {
  knex("attached_anvil_cloud_rule")
    .where("id", "=", req.body.id)
    .update({
      constraint_name: req.body.constraint_name,
      constraint_parameter_integer: req.body.constraint_parameter_integer,
      constraint_parameter_boolean: req.body.constraint_parameter_boolean,
      user_input_integer: req.body.user_input_integer,
      user_input_boolean: req.body.user_input_boolean,
    })
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message: "The data could not be posted. Please try again",
      })
    );
});

//Rule 5: Detached Anvil Cloud
app.get("/rules/detached", function (req, res) {
  knex
    .select("*")
    .from("detached_anvil_cloud_rule")
    .orderBy("id", "asc")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.put("/rules/detached", (req, res) => {
  knex("detached_anvil_cloud_rule")
    .where("id", "=", req.body.id)
    .update({
      constraint_name: req.body.constraint_name,
      constraint_parameter_integer: req.body.constraint_parameter_integer,
      constraint_parameter_boolean: req.body.constraint_parameter_boolean,
      user_input_integer: req.body.user_input_integer,
      user_input_boolean: req.body.user_input_boolean,
    })
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message: "The data could not be posted. Please try again",
      })
    );
});

//Rule 6: Debris Cloud
app.get("/rules/debris", function (req, res) {
  knex
    .select("*")
    .from("debris_cloud_rule")
    .orderBy("id", "asc")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.put("/rules/debris", (req, res) => {
  knex("debris_cloud_rule")
    .where("id", "=", req.body.id)
    .update({
      constraint_name: req.body.constraint_name,
      constraint_parameter_integer: req.body.constraint_parameter_integer,
      constraint_parameter_boolean: req.body.constraint_parameter_boolean,
      user_input_integer: req.body.user_input_integer,
      user_input_boolean: req.body.user_input_boolean,
    })
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message: "The data could not be posted. Please try again",
      })
    );
});

//Rule 7: Disturbed Weather
app.get("/rules/disturbed", function (req, res) {
  knex
    .select("*")
    .from("disturbed_weather_rule")
    .orderBy("id", "asc")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.put("/rules/disturbed", (req, res) => {
  knex("disturbed_weather_rule")
    .where("id", "=", req.body.id)
    .update({
      constraint_name: req.body.constraint_name,
      constraint_parameter_integer: req.body.constraint_parameter_integer,
      constraint_parameter_boolean: req.body.constraint_parameter_boolean,
      user_input_integer: req.body.user_input_integer,
      user_input_boolean: req.body.user_input_boolean,
    })
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message: "The data could not be posted. Please try again",
      })
    );
});

//Rule 8: Thick Cloud Layer
app.get("/rules/thick", function (req, res) {
  knex
    .select("*")
    .from("thick_cloud_rule")
    .orderBy("id", "asc")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.put("/rules/thick", (req, res) => {
  knex("thick_cloud_rule")
    .where("id", "=", req.body.id)
    .update({
      constraint_name: req.body.constraint_name,
      constraint_parameter_integer: req.body.constraint_parameter_integer,
      constraint_parameter_boolean: req.body.constraint_parameter_boolean,
      user_input_integer: req.body.user_input_integer,
      user_input_boolean: req.body.user_input_boolean,
    })
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message: "The data could not be posted. Please try again",
      })
    );
});

//Rule 9: Smoke Plume
app.get("/rules/smoke", function (req, res) {
  knex
    .select("*")
    .from("smoke_plume_rule")
    .orderBy("id", "asc")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.put("/rules/smoke", (req, res) => {
  knex("smoke_plume_rule")
    .where("id", "=", req.body.id)
    .update({
      constraint_name: req.body.constraint_name,
      constraint_parameter_integer: req.body.constraint_parameter_integer,
      constraint_parameter_boolean: req.body.constraint_parameter_boolean,
      user_input_integer: req.body.user_input_integer,
      user_input_boolean: req.body.user_input_boolean,
    })
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message: "The data could not be posted. Please try again",
      })
    );
});

//Rule 10: Tribo-Electro
app.get("/rules/tribo", function (req, res) {
  knex
    .select("*")
    .from("tribo_electric_rule")
    .orderBy("id", "asc")
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message:
          "The data you are looking for could not be found. Please try again",
      })
    );
});

app.put("/rules/tribo", (req, res) => {
  knex("tribo_electric_rule")
    .where("id", "=", req.body.id)
    .update({
      constraint_name: req.body.constraint_name,
      constraint_parameter_integer: req.body.constraint_parameter_integer,
      constraint_parameter_boolean: req.body.constraint_parameter_boolean,
      user_input_integer: req.body.user_input_integer,
      user_input_boolean: req.body.user_input_boolean,
    })
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({
        message: "The data could not be posted. Please try again",
      })
    );
});

module.exports = { app, knex };
