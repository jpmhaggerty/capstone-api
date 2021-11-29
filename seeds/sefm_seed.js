exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sefm")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("sefm").insert([
        {
          constraint_name:
          "Has any electric field reading at a horizontal distance of less than or equal to 5 nmi from the flight path been greater than or equal to 1500 V/m (absolute value) within the last 15 minutes?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&",
        },
        {
          constraint_name:
          "Has any electric field reading at a horizontal distance of less than or equal to 5 nmi from the flight path been greater than or equal to 1000 V/m (absolute value) within the last 15 minutes?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,B|",
        },
        {
          constraint_name:
          "Are all clouds at a slant distance of less than or equal to 10 nmi from the flight path transparent?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,B|",
        },
        {
          constraint_name:
            "Do all non-transparent clouds at a slant distance of less than or equal to 10 nmi have tops at altitudes where the temperature is warmer than or equal to +5 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,B|,C&",
        },
        {
          constraint_name:
          "Have all non-transparent clouds at a slant distance of less than or equal to 10 nmi been exclusive of convective clouds with cloud tops at altitudes where the temperature was colder than or equal to −10 °C for 3 hours?",
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
