const sqlite3 = require('sqlite3').verbose();
const dbFile = './database/listhoa.db';

class HoaController {

    // [GET] /hoa
    async index(req, res) {
        try {
            var db = new sqlite3.Database(dbFile);
            db.serialize();
            const listHoa = await new Promise((resolve, reject) => {
                db.all(`SELECT * FROM hoa`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.status(200).send(listHoa);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            db.close();
        }
    }
}

module.exports = new HoaController();
