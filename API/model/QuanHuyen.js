const conn = require('../DBConnect/DBConnect');

const QuanHuyen = {
    getAll:(callback)=>{
        return conn.query("SELECT quanhuyen.*, tinh.Ten AS TenTinh FROM quanhuyen JOIN tinh ON tinh.Id = quanhuyen.Id_Tinh ORDER BY Id DESC",callback);
    },

    insert:(data,callback)=>{
        return conn.query(`INSERT INTO quanhuyen(Ten,Id_Tinh,TrangThai) 
        VALUES ('${data.Ten}' , '${data.Id_Tinh}' , '${data.TrangThai}')`,callback);
    },

    update:(Id,data,callback)=>{
        return conn.query(`UPDATE quanhuyen SET Ten = '${data.Ten}',Id_Tinh = '${data.Id_Tinh}',TrangThai = '${data.TrangThai}' WHERE Id = '${Id}'`,callback);
    },

    delete:(Id,callback)=>{
        return conn.query(`DELETE FROM quanhuyen WHERE Id = '${Id}'`,callback);
    },

    getById:(Id,callback)=>{
        return conn.query(`SELECT * FROM quanhuyen WHERE Id = '${Id}'`,callback);
    },

    getByIdTinh:(Id,callback)=>{
        return conn.query(`SELECT quanhuyen.*, tinh.Ten AS TenTinh FROM quanhuyen JOIN tinh ON tinh.Id = quanhuyen.Id_Tinh WHERE Id_Tinh = '${Id}'`,callback);
    },

    getByTen:(Ten,callback)=>{
        return conn.query(`SELECT quanhuyen.*, tinh.Ten AS TenTinh FROM quanhuyen JOIN tinh ON tinh.Id = quanhuyen.Id_Tinh WHERE Ten LIKE '%${Ten}%'`,callback);
    },

    getByIdTinhAndTen:(Id,Ten,callback)=>{
        return conn.query(`SELECT quanhuyen.*, tinh.Ten AS TenTinh FROM quanhuyen JOIN tinh ON tinh.Id = quanhuyen.Id_Tinh WHERE Id_Tinh = '${Id}' AND Ten LIKE '%${Ten}%'`,callback);
    },

    checkTenEq:(Ten,callback)=>{
        return conn.query(`SELECT * FROM quanhuyen WHERE Ten = '${Ten}'`,callback);
    },

    checkTenEqUpdate:(Id,Ten,callback)=>{
        return conn.query(`SELECT * FROM quanhuyen WHERE Ten = '${Ten}' AND Id != '${Id}'`,callback);
    },
    getByTinhId:(TinhId,callback)=>{
        return conn.query(`SELECT * FROM quanhuyen WHERE Id_Tinh = '${TinhId}' && TrangThai = 1`,callback);
    }
}

module.exports = QuanHuyen;