exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('detached_anvil_cloud_rule').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('detached_anvil_cloud_rule').insert([
         //1
            {   constraint_name: 'Does the flight path go through a detached anvil cloud?' , 
              constraint_parameter_integer: null,
              constraint_parameter_boolean: false,
              user_input_integer: null,
              user_input_boolean: null
          },
          //2
          {   constraint_name: 'Have 4  hours passed since the last lightning strike from that anvil cloud and has it been 3 hours since that anvil cloud detached from its parents cloud?', 
          constraint_parameter_integer: null ,
          constraint_parameter_boolean: true,
          user_input_integer:null ,
          user_input_boolean: null
      },
      //3
      {   constraint_name: 'Are any portions of the detached anvil cloud at a slant distance of less than or equal to 5 nmi from the flight path is located entirely at altitudes where the temperature is colder than 0 °C?', 
              constraint_parameter_integer: null,
              constraint_parameter_boolean: true,
              user_input_integer: null,
              user_input_boolean: null
          },
          //4
          {   constraint_name: 'The MRR is less than +7.5 dBZ everywhere within the flight path?' , 
          constraint_parameter_integer: null,
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null
      },
      //5
      {   constraint_name: 'Is the flight path greater than 0 nmi and less than 3 nmi from cloud?' , 
          constraint_parameter_integer: null,
          constraint_parameter_boolean: false,
          user_input_integer: null,
          user_input_boolean: null
      },
      //6
      {   constraint_name: 'Has it been 30 minutes since every lightning discharge within or from the parent cloud or anvil cloud before detachment of the anvil cloud, and after every lightning discharge within or from the detached anvil cloud after detachment?' , 
          constraint_parameter_integer: null,
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null
      }, 
      //7
      {   constraint_name: 'Has the portion of the detached anvil cloud located less than or equal to 5 nmi from the flight path located entirely at altitudes where the temperature is colder than 0 °C?' , 
          constraint_parameter_integer: null,
          constraint_parameter_boolean: true,
          user_input_integer: null,
          user_input_boolean: null
      },
      //8
      {   constraint_name: 'Is the MRR is less than +7.5 dBZ at every point at a slant distance of less than or equal to 1 nmi from the flight path?' , 
      constraint_parameter_integer: null,
      constraint_parameter_boolean: true,
      user_input_integer: null,
      user_input_boolean: null
    },
    //9
    {   constraint_name: 'Has it been 3 hours since strike from a parent or detached anvil cloud?' , 
    constraint_parameter_integer: null,
    constraint_parameter_boolean: true,
    user_input_integer: null,
    user_input_boolean: null
    },
    //10
    {   constraint_name: 'Is there is at least one working field mill at a horizontal distance of less than or equal to 5 nmi from the detached anvil cloud?' , 
     constraint_parameter_integer: null,
    constraint_parameter_boolean: true,
    user_input_integer: null,
    user_input_boolean: null
    },
    //11
    { constraint_name: 'Is the absolute values of all electric field measurements at a horizontal distance of less than or equal to 5 nmi from the flight path, and at each field mill been less than 1000 V/m for at least 15 minutes?' , 
    constraint_parameter_integer: null,
    constraint_parameter_boolean: true,
    user_input_integer: null,
    user_input_boolean: null   
    },
    //12
    {   constraint_name: 'Is the largest radar reflectivity from any part of the detached anvil cloud at a slant distance of less than or equal to 5 nmi from the flight path has been less than +10 dBZ for at least 15 minutes?' , 
    constraint_parameter_integer: null,
    constraint_parameter_boolean: true,
    user_input_integer: null,
    user_input_boolean: null
    },
    //13
    {   constraint_name: 'Is the portion of the detached anvil cloud at a slant distance of less than or equal to 5 nmi from the flight path is located entirely at altitudes where the temperature is colder than 0 °C?' , 
    constraint_parameter_integer: null,
    constraint_parameter_boolean: true,
    user_input_integer: null,
    user_input_boolean: null
    },
    //14
    {   constraint_name: 'Is the MRR is less than +7.5 dBZ at every point at a slant distance of less than or equal to 1 nmi from the flight path?' , 
    constraint_parameter_integer: null,
    constraint_parameter_boolean: true,
    user_input_integer: null,
    user_input_boolean: null
    },
    //15
    {   constraint_name: 'Is the flight path at a slant distance of greater than 3 nmi and less than or equal to 10 nmi from a detached anvil cloud?' , 
    constraint_parameter_integer: null,
    constraint_parameter_boolean: false,
    user_input_integer: null,
    user_input_boolean: null
    },
    //16
    {   constraint_name: 'Has it been 30 minutes since the last lightning discharge within or from the parent cloud or anvil cloud before detachment, and after every lightning discharge within or from the detached anvil cloud after detachment?' , 
    constraint_parameter_integer: null,
    constraint_parameter_boolean: true,
    user_input_integer: null,
    user_input_boolean: null
    },
    //17
    {   constraint_name: 'Is the portion of the detached anvil cloud at a slant distance of less than or equal to 10 nmi from the flight path, and is it at altitudes where the temperature is colder than 0 °C' , 
    constraint_parameter_integer: null,
    constraint_parameter_boolean: true,
    user_input_integer: null,
    user_input_boolean: null
    }
            ]);
        });
    };