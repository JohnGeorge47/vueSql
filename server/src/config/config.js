/* eslint-disable */
module.exports={
  port:8081,
  db:{
    database:process.env.DB_NAME||"ourTestDb",
    user:process.env.DB_USER||"ourTestDb",
    password:process.env.DB_PASS||"ourTestDb",
    options:{
      dialect:process.env.DIALECT||"sqlite",
      host:process.env.HOST||"localhost",
      storage:"./ourTestDb.sqlite"
    }
  }
}
