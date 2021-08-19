
exports.up = (knex) => {
    return knex.schema.createTable('students', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.integer('group_id')
      
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('students')
  }