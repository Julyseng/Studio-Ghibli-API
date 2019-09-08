
exports.up = function(knex) {
    return knex.schema.createTable('films', t => {
        t.increments('id').primary()
        t.integer('films_id')
        t.string('title')
        t.string('description')
        t.string('producer')
        t.string('director')
        t.integer('release_date')
        t.integer('rt_score')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('films')
};
