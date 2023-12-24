const conn = require('../DBConnect/DBConnect');

const LoTrinh = {
    getAll:(callback)=>{
        return conn.query("SELECT lotrinh.* , t1.Ten DiemDi, t2.Ten DiemDen FROM lotrinh JOIN tinh t1 ON t1.Id=lotrinh.Id_DiemDi JOIN tinh t2 ON t2.Id=lotrinh.Id_DiemDen ORDER BY Id DESC",callback);
    },

    insert:(data,callback)=>{
        return conn.query(`INSERT INTO lotrinh(Id_DiemDi,Id_DiemDen,Ten,QuangDuong,ChiTiet,TrangThai) 
        VALUES ('${data.Id_DiemDi}' , '${data.Id_DiemDen}' , '${data.Ten}', '${data.QuangDuong}',
        '${data.ChiTiet}', '${data.TrangThai}')`,callback);
    },

    update:(Id,data,callback)=>{
        return conn.query(`UPDATE lotrinh SET Id_DiemDi = '${data.Id_DiemDi}' ,Id_DiemDen = '${data.Id_DiemDen}',Ten = '${data.Ten}', 
        QuangDuong = '${data.QuangDuong}', ChiTiet = '${data.ChiTiet}', TrangThai = '${data.TrangThai}' WHERE Id = '${Id}'`,callback);
    },

    delete:(Id,callback)=>{
        return conn.query(`DELETE FROM lotrinh WHERE Id = '${Id}'`,callback);
    },

    getById:(Id,callback)=>{
        return conn.query(`SELECT * FROM lotrinh WHERE Id = '${Id}'`,callback);
    },

    getByIdDiemDi:(Id,callback)=>{
        return conn.query(`SELECT lotrinh.* , t1.Ten DiemDi, t2.Ten DiemDen FROM lotrinh JOIN tinh t1 ON t1.Id=lotrinh.Id_DiemDi JOIN tinh t2 ON t2.Id=lotrinh.Id_DiemDen WHERE Id_DiemDi = '${Id}'`,callback);
    },

    getByIdDiemDen:(Id,callback)=>{
        return conn.query(`SELECT lotrinh.* , t1.Ten DiemDi, t2.Ten DiemDen FROM lotrinh JOIN tinh t1 ON t1.Id=lotrinh.Id_DiemDi JOIN tinh t2 ON t2.Id=lotrinh.Id_DiemDen WHERE Id_DiemDen = '${Id}'`,callback);
    },

    getByIdDiemDiAndDiemDen:(idDiemDi,idDiemDen,callback)=>{
        return conn.query(`SELECT lotrinh.* , t1.Ten DiemDi, t2.Ten DiemDen FROM lotrinh JOIN tinh t1 ON t1.Id=lotrinh.Id_DiemDi JOIN tinh t2 ON t2.Id=lotrinh.Id_DiemDen WHERE Id_DiemDi = '${idDiemDi}' AND Id_DiemDen = '${idDiemDen}'`,callback);
    },

    getByIdDiemDiemDiemDen:(Id_DiemDi,Id_DiemDen,callback)=>{
        return conn.query(`SELECT * FROM lotrinh WHERE Id_DiemDi = '${Id_DiemDi}' AND Id_DiemDen = '${Id_DiemDen}'`,callback)
    }
}

module.exports = LoTrinh;