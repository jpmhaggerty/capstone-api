exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("detached")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("detached").insert([
        //1
        {
          constraint_name:
            "Does the flight path go through a detached anvil cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,B|",
        },
        //2
        {
          constraint_name:
            "Have 4 hours passed since the last lightning strike from that anvil cloud and has it been 3 hours since that anvil cloud detached from its parent's cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,B|",
        },
        //3
        {
          constraint_name:
            "Are any portions of the detached anvil cloud at a slant distance of less than or equal to 5 nmi from the flight path is located entirely at altitudes where the temperature is colder than 0 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,B|,C&",
        },
        //4
        {
          constraint_name:
            "The MRR is less than +7.5 dBZ everywhere within the flight path?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,B|,C&",
        },
        //5
        {
          constraint_name:
            "Is the flight path greater than 0 nmi but less than 3 nmi from cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,D|",
        },
        //6-Redundant
        // {
        //   constraint_name:
        //   "Have 30 minutes elapsed since the last lightning discharge originating from or within either the parent or anvil cloud (before detachment), and since any lightning discharge from or within the detached anvil cloud after detachment?",
        //   constraint_parameter_integer: null,
        //   constraint_operator: "===",
        //   constraint_parameter_boolean: true,
        //   user_input_integer: null,
        //   user_input_boolean: false,
        //   logic_group: "A&,D|,E|",
        // },
        //6A- Time out
        {
          constraint_name:
          "Have more than 3 hours elapsed since the last lightning discharge originating from or within either the parent or anvil cloud (before detachment), and since any lightning discharge from or within the detached anvil cloud after detachment?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,D|",
        },
        //7
        {
          constraint_name:
            "Has the portion of the detached anvil cloud located less than or equal to 5 nmi from the flight path located entirely at altitudes where the temperature is colder than 0 °C?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,D|,F&",
        },
        //8
        {
          constraint_name:
            "Is the MRR is less than +7.5 dBZ at every point at a slant distance of less than or equal to 1 nmi from the flight path?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,D|,F&",
        },
        //9
        {
          constraint_name:
          "Have more than 30 minutes elapsed since the last lightning discharge originating from or within either the parent or anvil cloud (before detachment), and since any lightning discharge from or within the detached anvil cloud after detachment?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,D|,G&",
        },
        //10
        {
          constraint_name:
            "Is there is at least one working field mill at a horizontal distance of less than or equal to 5 nmi from the detached anvil cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,D|,G&,H&",
        },
        //11
        {
          constraint_name:
            "Is the absolute values of all electric field measurements at a horizontal distance of less than or equal to 5 nmi from the flight path, and at each field mill been less than 1000 V/m for at least 15 minutes?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,D|,G&,H&",
        },
        //12
        {
          constraint_name:
            "Is the largest radar reflectivity from any part of the detached anvil cloud at a slant distance of less than or equal to 5 nmi from the flight path has been less than +10 dBZ for at least 15 minutes?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,D|,G&,H&",
        },
        //13- Redundant
        // {
        //   constraint_name:
        //     "Is the portion of the detached anvil cloud at a slant distance of less than or equal to 5 nmi from the flight path is located entirely at altitudes where the temperature is colder than 0 °C?",
        //   constraint_parameter_integer: null,
        //   constraint_operator: "===",
        //   constraint_parameter_boolean: true,
        //   user_input_integer: null,
        //   user_input_boolean: false,
        //   logic_group: "A&,D|,G&,I&",
        // },
        //14- Redundant
        // {
        //   constraint_name:
        //     "Is the MRR is less than +7.5 dBZ at every point at a slant distance of less than or equal to 1 nmi from the flight path?",
        //   constraint_parameter_integer: null,
        //   constraint_operator: "===",
        //   constraint_parameter_boolean: true,
        //   user_input_integer: null,
        //   user_input_boolean: false,
        //   logic_group: "A&,D|,G&,I&",
        // },
        //15
        {
          constraint_name:
            "Is the flight path at a slant distance of greater than 3 nmi and less than or equal to 10 nmi from a detached anvil cloud?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A&,J|,K|",
        },
        //16
        {
          constraint_name:
          "Have 30 minutes elapsed since the last lightning discharge originating from or within either the parent or anvil cloud (before detachment), and since any lightning discharge from or within the detached anvil cloud after detachment?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,J|,K|",
        },
        //17
        {
          constraint_name:
            "Is the portion of the detached anvil cloud at a slant distance of less than or equal to 10 nmi from the flight path, and is it at altitudes where the temperature is colder than 0 °C",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: true,
          logic_group: "A&,J|",
        },
      ]);
    });
};
