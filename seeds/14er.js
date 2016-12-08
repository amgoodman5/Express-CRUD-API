exports.seed = function(knex, Promise) {
    return knex('14er_db').del()
        .then(function() {
                const mountains = [{
                            name: 'Crestone',
                            altitude: 14294,
                            text: 'Hard',
                        },
                        {
                        name: 'Crestone Needle',
                        altitude: 14197,
                        text: 'Hard AF',
                    },
                    {
                    name: 'Kit Carson',
                    altitude: 14165,
                    text: 'Basic',
            },{
            name: 'Blanca Peak',
            altitude: 14345,
            text: 'Basic',
        }];


return knex('14er_db').insert(mountains);
});
};
