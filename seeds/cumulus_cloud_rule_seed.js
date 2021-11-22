exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cumulus_cloud_rule")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cumulus_cloud_rule").insert([
        {
          constraint_name:
            "Is the cloud between 0 and 5 nmi where the cloud top is at an altitude where the temp is  colder than or equal  -10° C?",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name:
            "Is there a cloud between 5 and 10 where the cloud top is at an altitude where the temp is  colder than or equal  -20° C?",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name:
            "Will the  flight path be through the  cloud where the cloud has a top at an altitude where the temperature is colder than or equal to +5 °C and warmer than -5 °C?",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name: "Is the cloud producing precipitation?",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name:
            "Is the horizontal distance from the center of the cloud top to at least 1 working field mill less than 2 nmi?",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name:
            "Are all electric field mill measurements at a horizontal distance of less than or equal to 5 nmi from the flight path, between -100 V/m and +500 V/m for at least 15 minutes?",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name:
            "Will the flight path be through a cloud where the cloud has a top at an altitude where the temperature is colder than or equal to -5 °C?",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
      ]);
    });
};
