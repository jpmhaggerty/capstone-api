exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('attached_anvil_cloud_rule').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('attached_anvil_cloud_rule').insert([
          //1
            {   constraint_name: 'Is the flight path through or within 3 nmi of clouds?' , 
              constraint_parameter_integer: null,
              constraint_parameter_boolean: false,
              user_input_integer: null,
              user_input_boolean: null
          },
          //2
          {   constraint_name: 'Is the portion of the attached anvil cloud at a slant distance of less than or equal to 5 nmi from the flight path located entirely at altitudes where the temperature is colder than 0°C?', 
          constraint_parameter_integer: null ,
          constraint_parameter_boolean: true,
          user_input_integer:null ,
          user_input_boolean: null
      },
      //3
      {   constraint_name: 'Is MRR less than +7.5 dBZ at every point at a slant distance of less than or equal to 1 nmi from the flight path?', 
              constraint_parameter_integer: null,
              constraint_parameter_boolean: true,
              user_input_integer: null,
              user_input_boolean: null
          },
          //4
          {   constraint_name: 'Is the flight path between 3 nmi and 5 nmi from cloud?' , 
          constraint_parameter_integer: null,
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null
      },
      //5
      {   constraint_name: 'Is the portion of the attached anvil cloud at a slant distance of less than or equal to 5 nmi from the flight path located entirely at altitudes where the temperature is colder than 0°C?' , 
          constraint_parameter_integer: null,
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null
      },
      //6
      {   constraint_name: 'Is the flight path between 5 nmi and 10 nmi from cloud?' , 
          constraint_parameter_integer: null,
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null
      }, 
      //7
      {   constraint_name: 'Is the portion of the attached anvil cloud that is at a slant distance of less than or equal to 10 nmi from the flight path located entirely at altitudes where the temperature is colder than 0°C?' , 
      constraint_parameter_integer: null,
      constraint_parameter_boolean: false,
      user_input_integer: null,
      user_input_boolean: null
    }
        ]);
      });
  };