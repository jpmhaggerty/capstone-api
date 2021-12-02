exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cumulus")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cumulus").insert([
        {
          constraint_name:
            "Are there any cumulus clouds within 5 and 10 nmi from the flight path with cloud tops at an altitude where the temp is colder than or equal -20° C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&",
        },
        {
          constraint_name:
          "Are there any cumulus clouds within 0 and 5 nmi from the flight path with cloud tops at an altitude where the temp is colder than or equal -10° C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&",
        },
        {
          constraint_name:
            "Will the flight path be through a cloud where the cloud has a top at an altitude where the temperature is colder than or equal to -5 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&",
        },
        {
          constraint_name:
            "Will the  flight path be through the  cloud where the cloud has a top at an altitude where the temperature is colder than or equal to +5 °C and warmer than -5 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,B|",
        },
        {
          constraint_name: "Is the cloud producing precipitation?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,B|,C&",
        },
        {
          constraint_name:
            "Is the horizontal distance from the center of the cloud top to at least 1 working field mill less than 2 nmi?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,B|,C&",
        },
        {
          constraint_name:
            "Have all electric field mill measurements at a horizontal distance of less than or equal to 5 nmi from the flight path, between -100 V/m and +500 V/m for at least 15 minutes?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,B|,C&",
        },
      ]);
    });
};
