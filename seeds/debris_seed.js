exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("debris")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("debris").insert([
        //1- Not an input
        //2
        {
          constraint_name:
            "Have three hours passed since the latest observance of the debris cloud detaching from the parent cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,B&",
        },
        //3
        {
          constraint_name:
            "Have three hours passed since the latest observance of the debris cloud forming by the collapse of the parent cloud top to an altitude where the temperature is warmer than -10 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,B&",
        },
        //4
        {
          constraint_name:
            "Have three hours passed since the latest observance of any lightning discharges from or within the debris cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,B&",
        },
        //5- Not an input
        //6
        {
          constraint_name:
            "Is the vehicle’s flight path through a debris cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,C|",
        },
        //7
        {
          constraint_name:
            "Is the portion of the debris cloud at a slant distance of less than or equal to 5 nmi from the flight path is located entirely at altitudes where the temperature is colder than 0 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,C|,D&",
        },
        //8
        {
          constraint_name:
            "The MRR is less than +7.5 dBZ everywhere within the flight path?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,C|,D&",
        },
        //9
        {
          constraint_name:
            "Is the vehicle’s flight path 0-3nmi away from the debris cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,E|",
        },
        //10
        {
          constraint_name:
            "Is there is at least one working field mill at a horizontal distance of less than or equal to 5 nmi from the debris cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,E|,F&",
        },
        //11
        {
          constraint_name:
            "The absolute values of all electric field measurements at a horizontal distance of less than or equal to 5 nmi from the flight path, and at each field mill, have been less than 1000 V m-1 for at least 15 minutes?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,E|,F&",
        },
        //12
        {
          constraint_name:
            "Is the largest radar reflectivity from any part of the debris cloud less than or equal to a slant distance of 5 nmi from the flight path has been less than +10 dBZ for at least 15 minutes?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,E|,F&",
        },
        //13
        {
          constraint_name:
            "Is the portion of the debris cloud at a slant distance of less than or equal to 5 nmi from the flight path is located entirely at altitudes where the temperature is colder than 0 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,E|,G&",
        },
        //14
        {
          constraint_name:
            "Is the MRR is less than +7.5 dBZ at every point at a slant distance of less than or equal to 1 nmi from the flight path?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,E|,G&",
        },
      ]);
    });
};
