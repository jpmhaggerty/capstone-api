exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sefm")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("sefm").insert([
        {
          constraint_name:
            "Is the absolute value of any electrical field measurement at a horizontal distance of less than or equal to 5 nmi from the flight path been greater than or equal to 1500 V/m?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name:
            "Is the absolute value of any electrical field measurement at a horizontal distance of less than or equal to 5 nmi from the flight path been greater than or equal to 1000 V/m?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name:
            "Are all clouds within 10 nmi from the flight path transparent?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name:
            "All non-transparent clouds at a slant distance less than or equal to 10 nmi from the flight path:",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: null,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name:
            "Have tops at altitudes where the temperature is warmer than or equal to +5°C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name:
            "Been part of convection clouds with cloud tops at altitudes where the temperature was colder than or equal to -10°C for 3 hours?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
      ]);
    });
};
