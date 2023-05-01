const sqlite3 = require('sqlite3').verbose();
const dbFile = './database/listhoa.db';
class hoaHandler {

    async getListHoa(req, res, next) {
        try {
            var db = new sqlite3.Database(dbFile);
            db.serialize();
            const listHoa = await new Promise((resolve, reject) => {
                db.all(`SELECT * FROM listhoa`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.json(listHoa);
        } catch (err) {
            next(err);
        } finally {
            db.close();
        }
    }
}

module.exports = new hoaHandler();
