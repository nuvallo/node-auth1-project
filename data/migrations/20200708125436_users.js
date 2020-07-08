exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("username").unique();
    table.string("password");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
};
