
exports.up = knex=> knex.schema.createTable("price", table=>{
    table.increments("id")
    table.text("prices").notNullable()

    table.integer("plates_id").references("id").inTable("plates").onDelete("CASCADE")
  
});



exports.down = knex=> knex.schema.dropTable("price");
