exports.up = function(knex) {
    return knex.schema.createTable('comments', t => {
        t.increments('id')
        t.string('name')
        t.string('film_title')
        t.string('comment')
        t.dateTime('created')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments')
};
