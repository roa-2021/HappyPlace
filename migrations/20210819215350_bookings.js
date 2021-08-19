exports.up = (knex) => {
    return knex.schema.createTable('bookings', (table) => {
      table.increments('id').primary()
      table.integer('area_id')
      table.integer('group_id')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('bookings')
  }