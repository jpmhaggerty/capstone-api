exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("lightning")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("lightning").insert([
        {
          constraint_name: "What was the time of the last lightning strike?",
          constraint_parameter_integer: 30,
          constraint_operator: ">",
          constraint_parameter_boolean: null,
          user_input_integer: Date.now(),
          user_input_boolean: null,
          logic_group: "A|",
        },
        {
          constraint_name:
            "Will the flight path be a slant distance of greater than 10 nmi from any non-transparent part of the lightning generating thunderstorm?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A|,B&",
        },
        {
          constraint_name:
            "What is the minimum slant distance(nmi) of the lightning strike to the flight path?",
          constraint_parameter_integer: 10,
          constraint_operator: ">",
          constraint_parameter_boolean: null,
          user_input_integer: 10,
          user_input_boolean: null,
          logic_group: "A|,B&,C|",
        },
        {
          constraint_name:
            "Are all non-transparent parts of the cloud that produced the lightning at a slant distance of greater than 10 nmi from the flight path?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A|,B&,C|,D&",
        },
        {
          constraint_name:
            "Is there at least one working field mill at a horizontal distance of less than or equal to 5 nmi from lightning discharge?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A|,B&,C|,D&",
        },
        {
          constraint_name:
            "Are the absolute values of all bounded electric field measurements (readings taken from all devices within  a horizontal distance of less than or equal to 5 nmi from the flight path, and from devices within a horizontal distance of less than or equal to 5 nmi from the lightning discharge) registering at less than 1000 V/m for at least 15 minutes?",
          constraint_parameter_integer: null,
          constraint_operator: "===",
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: false,
          logic_group: "A|,B&,C|,D&",
        },
      ]);
    });
};
