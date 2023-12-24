const conn = require('../DBConnect/DBConnect');

const DiemXe = {
    getAll:(callback)=>{
        return conn.query("SELECT diemxe.*, quanhuyen.Ten AS QuanHuyen FROM diemxe JOIN quanhuyen ON quanhuyen.Id = diemxe.Id_QuanHuyen ORDER BY Id DESC",callback);
    },

    insert:(data,callback)=>{
        return conn.query(`INSERT INTO diemxe(ViTri,TrangThai,Id_QuanHuyen,Name) VALUES ('${data.ViTri}' , '${data.TrangThai}', '${data.Id_QuanHuyen}', '${data.Name}')`,callback);
    },

    update:(Id,data,callback)=>{
        return conn.query(`UPDATE diemxe SET ViTri = '${data.ViTri}', TrangThai = '${data.TrangThai}', Id_QuanHuyen = '${data.Id_QuanHuyen}', Name = '${data.Name}' WHERE Id = '${Id}'`,callback);
    },

    delete:(Id,callback)=>{
        return conn.query(`DELETE FROM diemxe WHERE Id = '${Id}'`,callback);
    },

    getById:(Id,callback)=>{
        return conn.query(`SELECT * FROM diemxe WHERE Id = '${Id}'`,callback);
    },

    getByTen:(ten,callback)=>{
        return conn.query(`SELECT diemxe.*, quanhuyen.Ten AS QuanHuyen FROM diemxe JOIN quanhuyen ON quanhuyen.Id = diemxe.Id_QuanHuyen WHERE Name LIKE '%${ten}%'`,callback);
    },

    getByIdQuanHuyen:(Id,callback)=>{
        return conn.query(`SELECT diemxe.*, quanhuyen.Ten AS QuanHuyen FROM diemxe JOIN quanhuyen ON quanhuyen.Id = diemxe.Id_QuanHuyen WHERE Id_QuanHuyen = '${Id}'`,callback);
    },

    getByIdHuyen:(IdHuyen,callback)=>{
        return conn.query(`SELECT * FROM diemxe WHERE Id_QuanHuyen = '${IdHuyen}'`,callback);
    }
}

module.exports = DiemXe;