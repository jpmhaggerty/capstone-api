exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lightning_rule').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('lightning_rule').insert([
        {   constraint_name: 'What is the slant distance to the lightning strike? (nmi)' , 
            constraint_parameter_integer: 10,
            constraint_parameter_boolean: null,
            user_input_integer: null,
            user_input_boolean: null
        },
        {   constraint_name: 'What was the time of the last lightning strike?' , 
        constraint_parameter_integer: 30 ,
        constraint_parameter_boolean: null,
        user_input_integer:null ,
        user_input_boolean: null
    },
    {   constraint_name: 'Was the cloud that produced the lightning strike within 10 nmi?' , 
            constraint_parameter_integer: null,
            constraint_parameter_boolean: true,
            user_input_integer: null,
            user_input_boolean: null
        },
        {   constraint_name: 'Is there at least one working field mill within 5 nmi of the lightning strike?' , 
        constraint_parameter_integer: null,
        constraint_parameter_boolean: true,
        user_input_integer: null,
        user_input_boolean: null
    },
    {   constraint_name: 'Was the highest absolute value field mill measurement in 5 nmi of lightning strike for 15 minutes greater than or equal to 1000 V/m?' , 
        constraint_parameter_integer: null,
        constraint_parameter_boolean: true,
        user_input_integer: null,
        user_input_boolean: null
    }   
      ]);
    });
};

    