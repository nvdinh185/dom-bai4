const sqlite3 = require('sqlite3').verbose();
const dbFile = './database/listhoa.db';
const db = new sqlite3.Database(dbFile);

db.serialize();

module.exports = {
    getListHoa
};

async function getListHoa() {
    const listhoa = await new Promise((resolve, reject) => {
        db.all(`SELECT * FROM listhoa`, (err, row) => {
            if (err) reject(err);
            resolve(row);
        })
    })
    return listhoa;
}