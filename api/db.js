import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tamaldas69",
  database: "tamaldb"
})