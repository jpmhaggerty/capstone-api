exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("thick")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("thick").insert([
        //1
        {
          constraint_name:
            "Is the flight path carrying the vehicle through a transparent cloud layer?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,B&,C|",
        },
        //2
        {
          constraint_name:
            "Is the transparent cloud layer greater than or equal to 1.4 km thick and any part of the cloud layer within the flight path is located at an alt. where the temp. is between 0 °C and -20 °C, inclusive?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,B&,C|",
        },
        //3
        {
          constraint_name:
            "Is it connected to a thick cloud layer that, at a slant distance of <= to 5 nmi from the flight path, is >= to 1.4 km thick and has any part located at any alt. where the temp. is between 0 °C and -20 °C, inclusive?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,B&,C|",
        },
        //4
        {
          constraint_name:
            "Is the thick cloud layer a cirriform cloud layer that has never been associated with convective clouds?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,B|,D&",
        },
        //5
        {
          constraint_name:
            "The cloud layer in question is located entirely at altitudes where the temperature is colder than or equal to -15 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,B|,D&",
        },
        //6
        {
          constraint_name:
            "The cloud layer in question shows no evidence of containing liquid water?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,B|,D&",
        },
        //7
        {
          constraint_name:
            "The cloud layer does not contain a radar reflectivity of 0 dBZ or greater at any location that is less than or equal to 5 nmi from the flight path?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&",
        },
      ]);
    });
};
