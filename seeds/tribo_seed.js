exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tribo")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tribo").insert([
        //1- Not an input
        // {
        //   constraint_name:
        //     "Will the flight path carry the launch vehicle through any part of a cloud at any altitude where:",
        //   constraint_parameter_integer: null,
        //   constraint_operator: "===",
        //   constraint_parameter_boolean: false,
        //   user_input_integer: null,
        //   user_input_boolean: true,
        //   logic_group: "A|,B|",
        // },
        //2
        {
          constraint_name: "Will the flight path carry the launch vehicle through any part of a cloud at any altitude where the temperature is colder than or equal to -10 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A|,B|",
        },
        //3
        {
          constraint_name:
            "Is the launch vehicle’s velocity less than or equal to 910 m/s (3000 ft/s)?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A|,B|",
        },
        //4- Not an input
        // {
        //   constraint_name:
        //     "Has the launch vehicle been treated for surface electrification such that:",
        //   constraint_parameter_integer: null,
        //   constraint_operator: "===",
        //   constraint_parameter_boolean: false,
        //   user_input_integer: null,
        //   user_input_boolean: true,
        //   logic_group: "A|,D|,E&",
        // },
        //5
        {
          constraint_name:
            "Has the launch vehicle been treated for surface electrification such that all surfaces of the launch vehicle susceptible to ice particle impact have a surface resistivity less than 10^9 ohms per square (meter?)?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A|,D|,E&",
        },
        //6
        {
          constraint_name:
            "Has the launch vehicle been treated for surface electrification such that all conductors on surfaces, including dielectric surfaces that have been coated with conductive materials, are bonded to the launch vehicle by a resistance that is less than 10^5 ohms?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A|,D|,E&",
        },
        //7
        {
          constraint_name:
            "Has testing or analysis demonstrated that electrostatic discharges on the surface of the launch vehicle caused by triboelectrification will not be hazardous to the launch vehicle or the spacecraft?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A|,D|",
        },
      ]);
    });
};
