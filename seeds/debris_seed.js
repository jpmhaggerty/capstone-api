exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("debris")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("debris").insert([
        //1
        {
          constraint_name: "Have of the following occurred: ",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: null,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //2
        {
          constraint_name:
            "The debris cloud is observed to be detached from the parent cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //3
        {
          constraint_name:
            "The debris cloud is observed to have formed by the collapse of the parent cloud top to an altitude where the temperature is warmer than -10 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //4
        {
          constraint_name:
            "Any lightning discharges occuring within or from the debris cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //5
        {
          constraint_name:
            "Has it been 3 hours since any the occurrence of the above three conditions?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //6
        {
          constraint_name:
            "Is the vehicle’s flight path through a debris cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //7
        {
          constraint_name:
            "Is the portion of the debris cloud at a slant distance of less than or equal to 5 nmi from the flight path is located entirely at altitudes where the temperature is colder than 0 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //8
        {
          constraint_name:
            "The MRR is less than +7.5 dBZ everywhere within the flight path?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //9
        {
          constraint_name:
            "Is the vehicle’s flight path 0-3nmi away from the debris cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //10
        {
          constraint_name:
            "Is there is at least one working field mill at a horizontal distance of less than or equal to 5 nmi from the debris cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //11
        {
          constraint_name:
            "The absolute values of all electric field measurements at a horizontal distance of less than or equal to 5 nmi from the flight path, and at each field mill, have been less than 1000 V m-1 for at least 15 minutes?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //12
        {
          constraint_name:
            "Is the largest radar reflectivity from any part of the debris cloud less than or equal to a slant distance of 5 nmi from the flight path has been less than +10 dBZ for at least 15 minutes?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //13
        {
          constraint_name:
            "Is the portion of the debris cloud at a slant distance of less than or equal to 5 nmi from the flight path is located entirely at altitudes where the temperature is colder than 0 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //14
        {
          constraint_name:
            "Is the MRR is less than +7.5 dBZ at every point at a slant distance of less than or equal to 1 nmi from the flight path?",
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
