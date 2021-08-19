
exports.up = (knex) => {
    return knex.schema.createTable('areas', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.integer('seating_cap')
      table.boolean('available')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('areas')
  }