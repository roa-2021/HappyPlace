exports.up = (knex) => {
  return knex.schema.createTable('groups', (table) => {
    table.increments('id').primary()
    table.integer('group_size')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('groups')
}
