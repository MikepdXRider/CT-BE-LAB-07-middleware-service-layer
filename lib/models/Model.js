// import pool


module.exports = new class Model {
  id;
  //   more propertys...
  
  constructor(row) {
    this.id = row.id;
  }

  static async post(params) {
    // destructure row from a pool.query to sql to insert rows.
    // returns new Model(rows[0])
  }
  static async getAll() {
    // destructure row from a pool.query to sql to select rows.
    // returns new Model(rows)
  }
  static async getById(id) {
    // destructure row from a pool.query to sql to select rows by id.
    // returns new Model(rows[0])
  }
  static async patch(id, params) {
    // destructure row from a pool.query to sql to update rows by id.
    // returns new Model(rows[0])
  }
  static async delete(id) {
    // destructure row from a pool.query to sql to delete rows by id.
    // returns new Model(rows[0])
  }

};
