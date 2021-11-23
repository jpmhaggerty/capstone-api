exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("disturbed")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("disturbed").insert([
        {
          constraint_name:
            "Will the flight path carry the launch vehicle through a non-transparent cloud ,or at a slant distance of 0 - 5 nmi, associated with disturbed weather that includes clouds with tops at altitudes where the temperature is colder than 0 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "eq",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name:
            "Is the cloud producing moderate or greater precipitation?",
          constraint_parameter_integer: null,
          constraint_operator: "eq",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        {
          constraint_name:
            "Is there evidence of melting precipitation such as a radar bright band?",
          constraint_parameter_integer: null,
          constraint_operator: "eq",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
      ]);
    });
};
