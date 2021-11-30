exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("attached")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("attached").insert([
        //1
        {
          constraint_name:
            "Is the flight path through or within 3 nmi of clouds?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,B|",
        },
        //2
        {
          constraint_name:
            "Is the portion of the attached anvil cloud at a slant distance of less than or equal to 5 nmi from the flight path located entirely at altitudes where the temperature is colder than 0°C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,B|,E&",
        },
        //3
        {
          constraint_name:
            "Is MRR less than +7.5 dBZ at every point at a slant distance of less than or equal to 1 nmi from the flight path?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,B|,E&",
        },
        //4
        {
          constraint_name:
            "Is the flight path between 3 nmi and 5 nmi from cloud with a lightning discharge occurring within or from the parent cloud or anvil cloud over the past three hours?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,C|",
        },
        //5
        {
          constraint_name:
            "Is the portion of the attached anvil cloud at a slant distance of less than or equal to 5 nmi from the flight path located entirely at altitudes where the temperature is colder than 0°C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,C|",
        },
        //6
        {
          constraint_name:
          "Is the flight path between 5 nmi and 10 nmi from cloud with a lightning discharge occurring within or from the parent cloud or anvil cloud over the past thirty minutes?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,D|",
        },
        //7
        {
          constraint_name:
            "Is the portion of the attached anvil cloud that is at a slant distance of less than or equal to 10 nmi from the flight path located entirely at altitudes where the temperature is colder than 0°C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,D|",
        },
      ]);
    });
};
