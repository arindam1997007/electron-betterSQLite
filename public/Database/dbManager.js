const Database = require("better-sqlite3")
const path = require("path")

const dbPath =
	process.env.NODE_ENV === "development"
		? "./demo_table.db"
		: path.join(process.resourcesPath, "./demo_table.db")

const db = new Database(dbPath)
db.pragma("journal_mode = WAL")

exports.db = db
