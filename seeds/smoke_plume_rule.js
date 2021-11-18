exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('smoke_plume_rule').truncate()
        .then(function () {
        // Inserts seed entries
        return knex('smoke_plume_rule').insert([
            //1
            { constraint_name: 'Will the flight path carry the vehicle through a non-transparent cumulus cloud attached a parent smoke plume?' , 
            constraint_parameter_integer: null,
            constraint_parameter_boolean: false,
            user_input_integer: null,
            user_input_boolean: null
            },
          //2
            { constraint_name: 'Will the flight path carry the vehicle through a non-transparent cumulus cloud that has been detached from a smoke plume within the last 60 minutes?' , 
            constraint_parameter_integer: null ,
            constraint_parameter_boolean: false,
            user_input_integer:null ,
            user_input_boolean: null
        }
        ]);
        });
    };