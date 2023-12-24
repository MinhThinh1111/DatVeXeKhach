const conn = require('../DBConnect/DBConnect');

const Tinh = {
    getAll:(callback)=>{
        return conn.query("SELECT * FROM tinh ORDER BY Id DESC",callback);
    },

    insert:(data,callback)=>{
        return conn.query(`INSERT INTO tinh(Ten,TrangThai) 
        VALUES ('${data.Ten}' , '${data.TrangThai}')`,callback);
    },

    update:(Id,data,callback)=>{
        return conn.query(`UPDATE tinh SET Ten = '${data.Ten}',TrangThai = '${data.TrangThai}' WHERE Id = '${Id}'`,callback);
    },

    delete:(Id,callback)=>{
        return conn.query(`DELETE FROM tinh WHERE Id = '${Id}'`,callback);
    },

    getById:(Id,callback)=>{
        return conn.query(`SELECT * FROM tinh WHERE Id = '${Id}'`,callback);
    },

    getByTrangThai:(TrangThai,callback)=>{
        return conn.query(`SELECT * FROM tinh WHERE TrangThai = '${TrangThai}'`,callback);
    },

    getByTen:(Ten,callback)=>{
        return conn.query(`SELECT * FROM tinh WHERE Ten LIKE '%${Ten}%'`,callback);
    },

    checkTenEq:(Ten,callback)=>{
        return conn.query(`SELECT * FROM tinh WHERE Ten = '${Ten}'`,callback);
    },

    checkTenEqUpdate:(Id,Ten,callback)=>{
        return conn.query(`SELECT * FROM tinh WHERE Ten = '${Ten}' AND Id != '${Id}'`,callback);
    },
}

module.exports = Tinh;