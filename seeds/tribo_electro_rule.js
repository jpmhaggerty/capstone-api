exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tribo_electric_rule")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tribo_electric_rule").insert([
        //1
        {
          constraint_name:
            "Will the flight path carry the launch vehicle through any part of a cloud at any altitude where:",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: null,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //2
        {
          constraint_name: "The temperature is colder than or equal to -10 °C?",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //3
        {
          constraint_name:
            "The launch vehicle’s velocity is less than or equal to 910 m s-1 (3000 ft s-1)?",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //4
        {
          constraint_name:
            "Has the launch vehicle been treated for surface electrification such that:",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: null,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //5
        {
          constraint_name:
            "All surfaces of the launch vehicle susceptible to ice particle impact are such that the surface resistivity is less than 109 ohms per square?",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //6
        {
          constraint_name:
            "All conductors on surfaces, including dielectric surfaces that have been coated with conductive materials, are bonded to the launch vehicle by a resistance that is less than 105 ohms?",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
        //7
        {
          constraint_name:
            "Have test or analysis demonstrated that electrostatic discharges on the surface of the launch vehicle caused by triboelectrification will not be hazardous to the launch vehicle or the spacecraft?",
          constraint_parameter_integer: null,
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null,
          logic_group: "abcd",
        },
      ]);
    });
};
