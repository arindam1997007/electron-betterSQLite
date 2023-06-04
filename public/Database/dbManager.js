const Database = require("better-sqlite3")
const dbPath = "./demo_table.db"

const db = new Database(dbPath)
db.pragma("journal_mode = WAL")

exports.db = db
