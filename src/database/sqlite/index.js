const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path")


async function sqliteConnection(){
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "..", "database.db"), // seleciona a pagina atual
        driver: sqlite3.Database // mostra qual driver irá utilizar
    })

    return database
}


module.exports = sqliteConnection