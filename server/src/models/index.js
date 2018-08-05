/* eslint-disable */
const fs =require("fs")
const path=require("path")
const Sequelize=require("sequelize")
const config=require("../cofig/config")
const db={}
const sequelize=new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

module.exports={

}
