const conn = require('../DBConnect/DBConnect');

const Xe = {
    getAll:(callback)=>{
        return conn.query("SELECT * FROM xe ORDER BY Id DESC",callback);
    },

    insert:(data,callback)=>{
        return conn.query(`INSERT INTO xe(Ten,Loai,SoGhe,BienSo,TrangThai) 
        VALUES ('${data.Ten}' , '${data.Loai}' , '${data.SoGhe}', '${data.BienSo}' , '${data.TrangThai}')`,callback);
    },

    update:(Id,data,callback)=>{
        return conn.query(`UPDATE xe SET Ten = '${data.Ten}' ,Loai = '${data.Loai}',SoGhe = '${data.SoGhe}',BienSo = '${data.BienSo}',TrangThai = '${data.TrangThai}' WHERE Id = '${Id}'`,callback);
    },

    delete:(Id,callback)=>{
        return conn.query(`DELETE FROM xe WHERE Id = '${Id}'`,callback);
    },

    getById:(Id,callback)=>{
        return conn.query(`SELECT * FROM xe WHERE Id = '${Id}'`,callback);
    },

    getByBienSo:(BienXo,callback)=>{
        return conn.query(`SELECT * FROM xe WHERE BienSo = '${BienXo}'`,callback);
    },

    getByBienSoUpdate:(BienXo,Id,callback)=>{
        return conn.query(`SELECT * FROM xe WHERE BienSo = '${BienXo}' AND Id != '${Id}'`,callback);
    },

    getByTenEqUpdate:(Ten,Id,callback)=>{
        return conn.query(`SELECT * FROM xe WHERE Ten = '${Ten}' AND Id != '${Id}'`,callback);
    },

    getByTenEq:(Ten,callback)=>{
        return conn.query(`SELECT * FROM xe WHERE Ten = '${Ten}'`,callback);
    },

    getByTen:(Ten,callback)=>{
        return conn.query(`SELECT * FROM xe WHERE Ten LIKE '%${Ten}%'`,callback);
    },
}

module.exports = Xe;