
const promise = require("bluebird");



///intal options

let initOptions = {

    promiseLib: promise

};



//intal confi

let config = {

    host: "database-1.cno0np8fsfm8.us-east-2.rds.amazonaws.com",

    port: 5432,

    database: "postgres",

    user: "postgres",

    password: "dC2020!!"

};



//load and init pg-promise

let pgp = require("pg-promise")(initOptions);

let db = pgp(config);

console.log(db);



module.exports = db;