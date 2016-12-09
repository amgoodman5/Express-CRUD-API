exports.seed = function(knex, Promise) {
    return knex('14er_db').del()
        .then(function() {
                const mountains = [{
                            name: 'Crestone',
                            altitude: 14294,
                            difficulty: 'Hard',
                        },
                        {
                        name: 'Crestone Needle',
                        altitude: 14197,
                        difficulty: 'Hard AF',
                    },
                    {
                    name: 'Kit Carson',
                    altitude: 14165,
                    difficulty: 'Basic',
            },{
            name: 'Blanca Peak',
            altitude: 14345,
            difficulty: 'Basic',
        }];


return knex('14er_db').insert(mountains);
});
};
