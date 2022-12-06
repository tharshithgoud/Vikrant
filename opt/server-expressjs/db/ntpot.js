const knex = require("./knex");

function getAllData() {
  return knex("ntpot_attack").select("*");
}

function countAttack() {
  return knex("ntpot_attack").count("src_id as CNT").first();
}

module.exports = {
  getAllData,
  countAttack,
};
