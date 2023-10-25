const mysql = require('mysql');

const configDB = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "hoa"
};

class HoaController {

    // [GET] /hoa
    async index(req, res) {
        try {
            var conn = mysql.createConnection(configDB);

            const listHoa = await new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM hoa`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.status(200).send(listHoa);
        } catch (err) {
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }
}

module.exports = new HoaController();
